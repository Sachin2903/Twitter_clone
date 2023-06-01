
import { Fragment, useRef} from 'react';
import CreateAcc from './CreateAcc.module.css';
import { TextField } from '@mui/material';
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';





export function CreateAccOfTwitter() {
 
    const navigate = useNavigate();
    const regName = useRef("");
    const regPhone = useRef("");
    const regEmail = useRef("");
    const regMonth = useRef(null);
    const regDate = useRef(null);
    const regYear = useRef(null);
    const createAccountAlert = useRef("")

    const regexExpForNumber = /^[6-9][0-9]{9}$/;
    const regexExpForName = /^[a-zA-Z]{4,20}$/;
    const regexExpForEmail = /^[a-zA-Z0-9]{3,}(@gmail.com|@email.com)$/;

    const textFieldStyles = {
        marginTop: '20px',
    };


    const labelStyles = {
        color: 'black',
    }

    function navigateToLogin() {

        if (regexExpForNumber.test(regPhone.current.value) && regexExpForName.test(regName.current.value) && regexExpForEmail.test(regEmail.current.value) && regMonth.current.value.length > 0 && regDate.current.value.length > 0 && regYear.current.value.length > 0) {
            if (!(localStorage.getItem("userDataByGroup3"))) {
                
                let dataObj = {
                    Name: regName.current.value,
                    Phone: regPhone.current.value,
                    Email: regEmail.current.value,
                    BOD: `${regDate.current.value} ${regMonth.current.value} ${regYear.current.value}`

                }
                localStorage.setItem("userDataByGroup3", JSON.stringify([dataObj]))
                navigate("/");
            } else {
                let oldDetail=JSON.parse(localStorage.getItem("userDataByGroup3"));

                let dataObj = {
                    Name: regName.current.value,
                    Phone: regPhone.current.value,
                    Email: regEmail.current.value,
                    BOD: `${regDate.current.value} ${regMonth.current.value} ${regYear.current.value}`

                }

                
                localStorage.setItem("userDataByGroup3", JSON.stringify([dataObj,...oldDetail]))
                navigate("/");



            }


        } else {
            createAccountAlert.current.style.display = "block";
            setTimeout(() => {
                createAccountAlert.current.style.display = "none";
            }, 5000)

        }
    }







    return (
        <Fragment>
            <div className={CreateAcc.createaccountpage}>


                <div className={CreateAcc.main_container_create_acc}>
                    <RxCross2 onClick={() => { navigate("/dummyHome") }} className={CreateAcc.crossbtnaccount} />

                    <div className={CreateAcc.sub_container_acc_new}>

                        <h1>Create your account</h1>


                        <TextField inputRef={regName} label="Name" variant='outlined' className={CreateAcc.input_field}
                            InputLabelProps={{
                                style: labelStyles,
                            }} />



                        <TextField inputRef={regPhone} label="Phone" variant='outlined' className={CreateAcc.input_field} style={textFieldStyles}
                            InputLabelProps={{
                                style: labelStyles,
                            }} />

                        <TextField inputRef={regEmail} label="Email" variant='outlined' className={CreateAcc.input_field} style={textFieldStyles}
                            InputLabelProps={{
                                style: labelStyles,
                            }} />



                        <div className={CreateAcc.date_section}>
                            <p id={CreateAcc.first_heading}>Date of birth</p>
                            <p>
                                This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>


                            <select ref={regMonth} className={CreateAcc.select1}>

                                <option value='January'>January</option>
                                <option value='February'>February</option>
                                <option value='March'>March</option>
                                <option value='April'>April</option>
                                <option value='May'>May</option>
                                <option value='June'>June</option>
                                <option value='July'>July</option>
                                <option value='August'>August</option>
                                <option value='September'>September</option>
                                <option value='October'>October</option>
                                <option value='November'>November</option>
                                <option value='December'>December</option>
                            </select>



                            <select ref={regDate} className={CreateAcc.select}>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                                <option value='6'>6</option>
                                <option value='7'>7</option>
                                <option value='8'>8</option>
                                <option value='9'>9</option>
                                <option value='10'>10</option>
                                <option value='11'>11</option>
                                <option value='12'>12</option>
                                <option value='13'>13</option>
                                <option value='14'>14</option>
                                <option value='15'>15</option>
                                <option value='16'>16</option>
                                <option value='17'>17</option>
                                <option value='18'>18</option>
                                <option value='19'>19</option>
                                <option value='20'>20</option>
                                <option value='21'>21</option>
                                <option value='22'>22</option>
                                <option value='23'>23</option>
                                <option value='24'>24</option>
                                <option value='25'>25</option>
                                <option value='26'>26</option>
                                <option value='27'>27</option>
                                <option value='28'>28</option>
                                <option value='29'>29</option>
                                <option value='30'>30</option>
                                <option value='31'>31</option>
                            </select>




                            <select ref={regYear} className={CreateAcc.select} style={{ width: '100px' }}>
                                <option value='2000'>2000</option>
                                <option value='2001'>2001</option>
                                <option value='2002'>2002</option>
                                <option value='2003'>2003</option>
                                <option value='2004'>2004</option>
                                <option value='2005'>2005</option>
                                <option value='2006'>2006</option>
                                <option value='2007'>2007</option>
                                <option value='2008'>2008</option>
                                <option value='2009'>2009</option>
                                <option value='2010'>2010</option>
                                <option value='2011'>2011</option>
                                <option value='2012'>2012</option>
                                <option value='2013'>2013</option>
                                <option value='2014'>2014</option>
                                <option value='2015'>2015</option>
                                <option value='2016'>2016</option>
                                <option value='2017'>2017</option>
                                <option value='2018'>2018</option>
                                <option value='2019'>2019</option>
                                <option value='2020'>2020</option>
                                <option value='2021'>2021</option>
                                <option value='2022'>2022</option>
                                <option value='2023'>2023</option>
                                <option value='2024'>2024</option>
                                <option value='2025'>2025</option>
                                <option value='2026'>2026</option>
                            </select>


                        </div>
                        <p className={CreateAcc.invalidalert} ref={createAccountAlert}>Invalid details</p>
                        <button onClick={navigateToLogin} className={CreateAcc.btn_create}>Next</button>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}
