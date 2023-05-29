// import {  useState } from 'react';
import { Fragment } from 'react';
import CreateAcc from './CreateAcc.module.css'
import { TextField } from '@mui/material';


export function CreateAccOfTwitter() {
    const textFieldStyles = {
        marginTop: '20px', // Adjust this value to set the desired spacing
    };


    const labelStyles = {
        color: 'black',
    }


    // const [selectedValue, setSelectedValue] = useState('');

    // const handleChange = (event) => {
    //     setSelectedValue(event.target.value);
    // };



    return (
        <Fragment>
            <div className={CreateAcc.main_container_create_acc}>

                <div className={CreateAcc.sub_container_acc_new}>

                    <h1>Create your account</h1>


                    <TextField label="Name" variant='outlined' className={CreateAcc.input_field}
                        InputLabelProps={{
                            style: labelStyles,
                        }} />



                    <TextField label="Phone" variant='outlined' className={CreateAcc.input_field} style={textFieldStyles}
                        InputLabelProps={{
                            style: labelStyles,
                        }} />

                    <TextField label="Email" variant='outlined' className={CreateAcc.input_field} style={textFieldStyles}
                        InputLabelProps={{
                            style: labelStyles,
                        }} />



                    <div className={CreateAcc.date_section}>
                        <p id={CreateAcc.first_heading}>Date of birth</p>
                        <p>
                            This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>


                        <select className={CreateAcc.select1}>
                            <option value="">Month</option>
                            <option value=''>January</option>
                            <option value=''>February</option>
                            <option value=''>March</option>
                            <option value=''>April</option>
                            <option value=''>May</option>
                            <option value=''>June</option>
                            <option value=''>July</option>
                            <option value=''>August</option>
                            <option value=''>September</option>
                            <option value=''>October</option>
                            <option value=''>November</option>
                            <option value=''>December</option>
                        </select>



                        <select

                            className={CreateAcc.select}
                        >
                            <option value=''>1</option>
                            <option value=''>2</option>
                            <option value=''>3</option>
                            <option value=''>4</option>
                            <option value=''>5</option>
                            <option value=''>6</option>
                            <option value=''>7</option>
                            <option value=''>8</option>
                            <option value=''>9</option>
                            <option value=''>10</option>
                            <option value=''>11</option>
                            <option value=''>12</option>
                            <option value=''>13</option>
                            <option value=''>14</option>
                            <option value=''>15</option>
                            <option value=''>16</option>
                            <option value=''>17</option>
                            <option value=''>18</option>
                            <option value=''>19</option>
                            <option value=''>20</option>
                            <option value=''>21</option>
                            <option value=''>22</option>
                            <option value=''>23</option>
                            <option value=''>24</option>
                            <option value=''>25</option>
                            <option value=''>26</option>
                            <option value=''>27</option>
                            <option value=''>28</option>
                            <option value=''>29</option>
                            <option value=''>30</option>
                            <option value=''>31</option>
                        </select>




                        <select
                            className={CreateAcc.select}


                            style={{ width: '100px' }}
                        >
                            <option value=''>2000</option>
                            <option value=''>2001</option>
                            <option value=''>2002</option>
                            <option value=''>2003</option>
                            <option value=''>2004</option>
                            <option value=''>2005</option>
                            <option value=''>2006</option>
                            <option value=''>2007</option>
                            <option value=''>2008</option>
                            <option value=''>2009</option>
                            <option value=''>2010</option>
                            <option value=''>2011</option>
                            <option value=''>2012</option>
                            <option value=''>2013</option>
                            <option value=''>2014</option>
                            <option value=''>2015</option>
                            <option value=''>2016</option>
                            <option value=''>2017</option>
                            <option value=''>2018</option>
                            <option value=''>2019</option>
                            <option value=''>2020</option>
                            <option value=''>2021</option>
                            <option value=''>2022</option>
                            <option value=''>2023</option>
                            <option value=''>2024</option>
                            <option value=''>2025</option>
                            <option value=''>2026</option>
                        </select>


                    </div>
                    <button className={CreateAcc.btn_create}>Next</button>
                </div>


            </div>
        </Fragment>
    )
}