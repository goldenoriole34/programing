import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import Styles from './8.CheckBox.module.css';
import classNames from 'classnames/bind'

const cx = classNames.bind(Styles);

//bind 모듈로 cx('클래스이름')
//cx ('one', 'two')
function Checkbox({children, checked, ...rest}) {
  return(
    // <div className={Styles.checkbox}>
    <div className={cx('checkbox')}>
      <label>
        <input type="checkbox" checked={checked} {...rest} />
        
        {/* <div className={Styles.icon}> */}
        <div className={cx('icon')}>
          {checked ? (
              <MdCheckBox className={Styles.checked}/>
            ) : (
              <MdCheckBoxOutlineBlank />
            )}
        </div>
      </label>
      <span>{children}</span>
    </div>
  );
}

export default Checkbox;