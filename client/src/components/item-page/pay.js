
import React from 'react';

const Pay = () => {
  return (
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" >
    <input type="hidden" name="cmd" value="_s-xclick" />
    <input type="hidden" name="hosted_button_id" value="LCXUU5996X5FL" />
    <input type="image" src="https://www.paypalobjects.com/es_XC/MX/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal, la forma más segura y rápida de pagar en línea." />
    <img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1" />
    </form>

  );
};

export default Pay;
