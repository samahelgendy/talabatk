import { useTranslation } from 'react-i18next';
import './NewOrders.css'
import { Button, Form, Input, Select } from 'antd';
function NewOrders (){
    const {t} = useTranslation();
    const msg = t("Please enter")
    return(
     <div className="dashboard">
      <div className="page-contant _MB0_ GRAYBG mainof-searchpage">
      <div className="search-banner">
      <div className="page-contant-inner set-min-height clearfix">
       <div className="search-page-wrap">
        <div>
            <h3 className="search-head">{t("Order items")}</h3>
            <p>{t("One click")}</p>
            <form class="search-main-form"  id="CustomerForm" novalidate="novalidate">
            <div className="deliver-address user_info_address newrow has-error">
             <div class="user_info_input">
              <input placeholder={t("Please enter")} className="delivery-input valid ui-autocomplete-input ui-corner-top" type="text" />
             </div>
             <select id="serviceid" class="valid">
              <option value="1">{t("Food Delivery")}</option>
              <option value="1">{t("Grocery Delivery")}</option>
              <option value="1">{t("Vegetables & Fruits")}</option>
              <option value="1">{t("Bakery & Sweets")}</option>
              <option value="1">{t("Pharmacy")}</option>
              <option value="1">{t("Meat Products")}</option>
             </select>
             <button type="submit">{t("Show Stores")}</button>
            </div>
            </form>
        </div>
       </div>
      </div>
      </div>
      </div>
     </div>
    )
}
export default NewOrders;