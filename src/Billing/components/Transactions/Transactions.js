import { transactions } from "../../FakeDate/FakeDate";
import redArrowDown from '../../../assets/icons/arrowDown.svg';
import greenArrow from '../../../assets/icons/greenArrow.svg';
import exclamation from '../../../assets/icons/exclamation.svg';
import classNames from "classnames";

function Transaction() {
    function numberWithCommas(x) {
        const parts = x.toString().split(",");
        parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,",");
        return parts.join(",");
    }
    return (
        <div>
            <div className="headerPart">
                <h6>Your Transaction's</h6>
                <p>23 - 30 March 2020</p>
            </div>
            {Object.keys(transactions).map(key => <div>
                <h6>{key.toUpperCase()}</h6>
                <div>
                    {transactions[key].map(item => <div className="item">
                        <div className="leftPart">
                            {item.status === 'failed' ? <img src={redArrowDown} alt='Arrow' />
                                : item.status === 'success' ? <img src={greenArrow} alt='Arrow' className="greenIcon" />
                                : <img src={exclamation} alt="Arrow"/>
                            }
                            <div>
                                <p>{item.name}</p>
                                <p>{item.date}</p>
                            </div>
                        </div>
                        {<p className={classNames({
                            'green': item.status === 'success',
                            'red': item.status === 'failed'
                        })}>{item.money ? numberWithCommas(item.money) : item.status}</p>}
                    </div>)}
                </div>
            </div>)}
        </div>
    )
}

export default Transaction;