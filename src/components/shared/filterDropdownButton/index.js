import { withTranslation } from 'react-i18next';
import React from 'react';
import moment from 'moment/min/moment-with-locales';
import { PrimaryButton, SecondaryButton } from '../../toolbox/buttons/button';
import AmountFieldGroup from './amountFieldGroup';
import DateFieldGroup from './dateFieldGroup';
import DropdownButton from '../../toolbox/dropdownButton';
import Icon from '../../toolbox/icon';
import IntegerFilter from './integerFilter';
import TextFilter from './textFilter';
import styles from './filterContainer.css';

const filterComponents = {
  'date-range': DateFieldGroup,
  'number-range': AmountFieldGroup,
  text: TextFilter,
  integer: IntegerFilter,
};

class FilterDropdownButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasErrors: true,
      filters: props.filters,
      areFiltersExtended: false,
    };

    this.handleFiltersChange = this.handleFiltersChange.bind(this);
    this.applyFilters = this.applyFilters.bind(this);
    this.setChildRef = this.setChildRef.bind(this);
    this.extendFilters = this.extendFilters.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { filters } = this.props;
    if (prevProps.filters !== filters) {
      this.setState({ filters });
    }
  }

  handleFiltersChange(fields) {
    let { filters } = this.state;
    let hasErrors = false;
    filters = Object.keys(fields).reduce((acc, field) => {
      hasErrors = hasErrors || !!fields[field].error;
      return {
        ...acc,
        [field]: fields[field].value,
      };
    }, filters);

    this.setState({ filters, hasErrors });
  }

  applyFilters(event) {
    event.preventDefault();
    const { filters } = this.state;
    ['dateFrom', 'dateTo'].forEach((param) => {
      const dateFormat = this.props.t('DD.MM.YY');
      const date = moment(filters[param], dateFormat);
      filters[param] = (date.isValid() && date.format(dateFormat)) || filters[param];
    });

    this.props.applyFilters(filters);
    this.childRef.toggleDropdown();
  }

  setChildRef(node) {
    this.childRef = node;
  }

  getFilters(filter) {
    const { filters } = this.state;
    return filter.type.indexOf('range') !== -1 ? {
      [`${filter.name}From`]: filters[`${filter.name}From`],
      [`${filter.name}To`]: filters[`${filter.name}To`],
    } : {
      [filter.name]: filters[filter.name],
    };
  }

  extendFilters() {
    this.setState({ areFiltersExtended: !this.state.areFiltersExtended });
  }

  renderFields(name, label, placeholder, valueFormatter, type) {
    const Component = filterComponents[type];
    const props = {
      name, label, placeholder, valueFormatter,
    };
    return (
      <Component
        key={name}
        {...props}
        filters={this.getFilters({ name, type })}
        updateCustomFilters={this.handleFiltersChange}
      />
    );
  }

  renderFooter() {
    const { hasErrors, areFiltersExtended } = this.state;
    const { t } = this.props;

    return (
      <React.Fragment>
        <span onClick={this.extendFilters} className={[styles.actionable, 'more-less-switch'].join(' ')}>
          {areFiltersExtended ? t('Less filters') : t('More Filters')}
        </span>
        <PrimaryButton
          disabled={hasErrors}
          className={['saveButton', styles.submitButton].join(' ')}
          type="submit"
          size="s"
        >
          {t('Apply Filters')}
        </PrimaryButton>
      </React.Fragment>
    );
  }

  render() {
    const { t, fields } = this.props;
    const { areFiltersExtended } = this.state;
    const primaryFilters = fields.slice(0, 4);
    const secondaryFilters = fields.slice(4, 8);

    return (
      <DropdownButton
        buttonClassName={`${styles.filterTransactionsButton} filterTransactions filter`}
        buttonLabel={(
          <React.Fragment>
            {t('Filter')}
            <Icon className="button-icon" name="iconFilter" />
          </React.Fragment>
        )}
        size="xs"
        ButtonComponent={SecondaryButton}
        align="right"
        ref={this.setChildRef}
      >
        <form onSubmit={this.applyFilters} className={`${styles.form} filter-container`}>
          <div className={styles.container}>
            {primaryFilters.map(({
              name, label, placeholder, valueFormatter, type,
            }) => this.renderFields(name, label, placeholder, valueFormatter, type))}
            {!areFiltersExtended && this.renderFooter()}
          </div>
          {areFiltersExtended && (
          <div className={styles.container}>
            {secondaryFilters.map(({
              name, label, placeholder, valueFormatter, type,
            }) => this.renderFields(name, label, placeholder, valueFormatter, type))}
            {this.renderFooter()}
          </div>
          )}
        </form>
      </DropdownButton>
    );
  }
}

export default withTranslation()(FilterDropdownButton);
