import React from 'react'

interface IProps {
    action: any;
    loading: boolean;
    disable: boolean;
    css: string;
    text: string;
    i?: any;    
}
const A:React.FC<IProps> = ({loading, disable, css, text, i, action}) => {
    const spinner = <i className="fas fa-circle-notch fa-spin"></i>;
    const outputCss = (loading || disable) ? css + " disabled" : css;

    if (loading)
    return (
      <a className={outputCss} onClick={action}>
        {loading ? spinner : i}
        {text}
      </a>
    );

  return (
    <a className={outputCss} onClick={action}>
      {i}
      {text}
    </a>
  );

}

export default A
