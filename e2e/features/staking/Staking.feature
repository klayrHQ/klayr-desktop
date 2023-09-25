Feature: Staking
  Background: Add an account and navigate to validators
    Given I add an account with passphrase "attract squeeze option inflict dynamic end evoke love proof among random blanket table pumpkin general impose access toast undo extend fun employ agree dash" password "Password@1" name "genesis_0"
    And I go to page "validators"
    And I wait for "1 seconds"

  Scenario: Validators should be displayed on the page
    Then I should see 103 validators in table

  Scenario: Validators can be randomly selected
    Given I click on an element with testId "genesis_11"
    And I wait for "1 seconds"
    Then I should see "genesis_11" validator details
    Given I go back to the previous page
    And I click on an element with testId "genesis_25"
    And I wait for "1 seconds"
    Then I should see "genesis_25" validator details
    Given I go back to the previous page
    Given I click on an element with testId "genesis_67"
    And I wait for "1 seconds"
    Then I should see "genesis_67" validator details

  Scenario: Stake validator then unstake validator - Edit stake
    Given I click on an element with testId "genesis_11"
    And I wait for "1 seconds"
    Then I should see "genesis_11" validator details
    Given I click on a button with text "Stake validator"
    Then I should see "Add to staking queue"
    Then button with text "Confirm" should be disabled
    When I type "10" in "stake"
    Then button with text "Confirm" should be enabled
    Given I click on a button with text "Confirm"
    Then I should see "Stake added to queue"
    Then I should see "Continue staking"
    When I click on a button with text "Go to the staking queue"
    Then I should see staking queue details for validator "genesis_11" with amount "10 LSK"
    When I click on a button with text "Continue"
    And I click on a button with text "Confirm"
    When I type "Password@1" in "password"
    And I click on a button with text "Continue"
    And I wait for "1 seconds"
    Then I should see staking confirmation details with amount "10 LSK"
    Given I click on an element with testId "dialog-close-button"
    Given I click on a button with text "Edit stake"
    Then I should see "Edit stake"
    Then button with text "Confirm" should be disabled
    When I type "100" in "stake"
    Then button with text "Confirm" should be enabled
    Given I click on a button with text "Confirm"
    Then I should see "Stake added to queue"
    Then I should see "Continue staking"
    When I click on a button with text "Go to the staking queue"
    Then I should see staking queue details for validator "genesis_11" with amount "100 LSK"
    When I click on a button with text "Continue"
    And I click on a button with text "Confirm"
    When I type "Password@1" in "password"
    And I click on a button with text "Continue"
    And I wait for "1 seconds"
    Then I should see staking confirmation details with amount "100 LSK"

  Scenario: Unstake validator - Remove stake
    Given I click on an element with testId "genesis_11"
    And I wait for "1 seconds"
    Then I should see "genesis_11" validator details
    Given I click on a button with text "Edit stake"
    Then I should see "Edit stake"
    Given I click on a button with text "Remove stake"
    Then I should see "Stake added to queue"
    Then I should see "Continue staking"
    When I click on a button with text "Go to the staking queue"
    Then I should see staking queue details for validator "genesis_11" with amount "100 LSK"
    When I click on a button with text "Continue"
    And I click on a button with text "Confirm"
    When I type "Password@1" in "password"
    And I click on a button with text "Continue"
    And I wait for "1 seconds"
    Then I should see unstaking confirmation details with amount "100 LSK"

  Scenario: View stakes
    Given I click on a button with text "Stakes"
    Then I should see "Stake amount"
    Then I should see 4 stakes in stakes list
