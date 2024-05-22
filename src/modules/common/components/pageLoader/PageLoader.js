import React from 'react';
import styles from './PageLoader.css';

function PageLoader() {
  return (
    <div className={styles.splashScreen}>
      <figure className={styles.logo}>
        <img
          alt="logo"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAACOCAYAAADn/TAIAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAoJJREFUeJzt3L+KlFcAh+EzKtFVFuz8B9qnsNFmLVLGu7DwIsTS0kLQK7AIVpIrSGthIynCIoKFsNUGsrIgohuNk3qRFL5+m29cn+cCDj+GdzjNmVlsLsdywBc6MvcAvk3CIREOiXBIhEMiHBLhkAiHRDgkwiERDolwSIRDIhwS4ZAIh0Q4JMIhEQ6JcEiEQyIckmNzD1hlr14cG4uxmHvGPidOfhpnL/4z94yx8Luq//bzhfNzT/jM5Y29ce/XnblnuKpohEMiHBLhkAiHRDgkwiERDolwSIRDIhwS4ZAIh0Q4JMIhEQ6JcEhW4uno82c/jN2daRq+8tPeOL42zaPGa9ffj+UER+29W4zfnxz/+oNWyEqE8/Du+vjj6TQf7C9P/5zsTe6dh68nOWd76+i4sXFmkrNWhauKRDgkwiERDolwSIRDIhwS4ZAIh0Q4JMIhEQ6JcEiEQyIcEuGQCIdkJV4ATum3xyfH+ulPc8/Y583u4ft+HrpwHt1fn3vCd+HwfRX4XwiHRDgkwiERDolwSIRDIhwS4ZAIh0Q4JMIhEQ6JcEiEQyIcEuGQCIdEOCTCIREOiXBIhEMiHBLhkAiHRDgkwiERDolwSIRDIhwS4ZAIh0Q4JMIhWYk/j7x5+83Y3Xk794wDs/vXkfHg1um5Z0xqJcL58erfc084UNtbR+eeMDlXFYlwSIRDIhwS4ZAIh0Q4JMIhEQ6JcEiEQyIcEuGQCIdEOCTCIREOyWJzOZZzjzjsPn5YjK2X0zy2XDu1HOcufZzkrK8hHBJXFYlwSIRDIhwS4ZAIh0Q4JMIhEQ6JcEiEQyIcEuGQCIdEOCTCIREOiXBIhEMiHBLhkAiH5F+fjEK01Bm7nwAAAABJRU5ErkJggg=="
        />
        <div className={styles.ldsRing}>
          {[...new Array(4).keys()].map((key) => (
            <div key={key} />
          ))}
        </div>
      </figure>
    </div>
  );
}

export default PageLoader;
