import { useTranslation } from 'react-i18next';
import './OrderEarning.css'
function OrderEarning(){
    const {t} = useTranslation();
    return(
        <div className='dashboard'>
      <div className="profile-earning">
        <div className="profile-earning-inner">
            <div className="table-holder">
             <div id="my-trips-data_wrapper" role="grid" className="dataTables_wrapper">
             <div style={{display:"flex" , justifyContent:"space-between"}}>
             <div className="dataTables_length" id="my-trips-data_length">
                <label>
                    {t("Show")}
                    <select aria-controls="my-trips-data">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    {t("entries")}
                </label>
              </div>

              <div id="my-trips-data_filter" className="dataTables_filter">
                <label>
                    <input type="search" aria-controls="my-trips-data" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                </label>
              </div>
             </div>

              <div className="table-responsive">
                <table className="ui celled table custom-table dataTable no-footer">
                  <thead>
                    <tr role="row">
                        <th></th>
                        <th>{t("Order No")}</th>
                        <th>{t("Order Date")}</th>
                        <th>{t("Store")}</th>
                        <th>{t("Total items")}</th>
                        <th>{t("Order Total")}</th>
                        <th>{t("Order Status")}</th>
                        <th>{t("View Details")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="odd">
                        <td class="dataTables_empty" colspan="8" valign="top">{t("No data available")}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div style={{display:"flex" , justifyContent:"space-between"}}>
              <div class="dataTables_info">
                 {t("Show")}{" "} 0 {" "}{t("to")}{" "} 0{" "} {t("from")}{" "} 0{" "} {t("entries")}
              </div>
              <div class="dataTables_paginate paging_simple_numbers">
                <a class="paginate_button previous disabled" id="my-trips-data_previous">{t("previous")}</a>
                <a class="paginate_button next disabled" id="my-trips-data_next">{t("next")}</a>
              </div>
              </div>
             </div>
            </div>
        </div>
      </div>
      </div>
    )
}
export default OrderEarning;