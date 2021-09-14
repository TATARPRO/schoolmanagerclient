import React from 'react'
import logo from '../../../img/logo.png'
import bgRepeat from '../../../img/repeat-bg.PNG'
import stamp from '../../../img/stamp.png'
import '../../../css/result-style.css';

const ResultPage =()=>{
    return(
        <div style={{ margin: "30px 30px", justifyContent: "center"}}>
            <div className="result-section" style={{ backgroundImage: `url(${bgRepeat}`}} >
                <div style={{ justifyContent: "center", display: "inlineBlock", left: "50%"}}><img src={logo} /></div>
                <div className="intro-heading">
                    <p className="school-title line-15"> W.M BRISTOW SECONDARY SCHOOL GBOKO </p>
                    <p className="school-address line-15">
                        <i className="fa fa-map-marker"></i>&nbsp;Km 4 1104 Court Road, Gboko Benue State
                    &nbsp;&nbsp;<span><i className="fa fa-globe"></i>&nbsp;http://www.bristow.com </span>
                    </p>
                    <p><span className="paper-description line-15">TERMLY CONTINOUS ASSESSMENT SHEET</span></p>
                </div>
                <div className="personal-info">
                    <div className="student-info">
                        <p><span>Name of student:</span>Ako Tavershima</p>
                        <p className="align-right"><span>Year:</span>2020/2021</p>
                    </div>
                    <div className="student-info">
                        <p><span>Gender:</span>Ako Tavershima</p>
                        <p><span>Age:</span>8</p>
                        <p className="align-right"><span>CLASS:</span>PRIMARY 1C</p>
                    </div>
                    <div className="student-info">
                        <p><span>Admission Number</span>30990</p>
                        <p><span>Number in CLASS:</span>34</p>
                        <p className="align-right"><span>Term:</span>First Term</p>
                    </div>
                </div>
                <div>
                    <table className="result-table">
                        <thead>
                            <tr>
                                <th>SUBJECTS</th>
                                <th className="vertical-text">TEST 1</th>
                                <th className="vertical-text">TEST 2</th>
                                <th className="vertical-text">TEST 3</th>
                                <th className="vertical-text">EXAM</th>
                                <th className="vertical-text">SCORES COMBINED</th>
                                <th className="vertical-text">AVERAGE CLASS</th>
                                <th className="vertical-text">IN CLASS HIGHEST</th>
                                <th className="vertical-text">IN CLASS LOWEST</th>
                                <th className="vertical-text">IN CLASS POSITION</th>
                                <th className="vertical-text">GRADE</th>
                                <th>REMARKS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="string-data subject-title">Agricultural Language</td>
                                <td className="numeric-data">8</td>
                                <td className="numeric-data">9</td>
                                <td className="numeric-data">8</td>
                                <td className="numeric-data">58</td>
                                <td className="numeric-data">87</td>
                                <td className="numeric-data">68.5</td>
                                <td className="numeric-data">86</td>
                                <td className="numeric-data">45</td>
                                <td className="numeric-data">6</td>
                                <td className="numeric-data">B</td>
                                <td className="remark">Excellent</td>
                            </tr>
                            <tr>
                                <td className="string-data subject-title">Agricultural Language</td>
                                <td className="numeric-data">8</td>
                                <td className="numeric-data">9</td>
                                <td className="numeric-data">8</td>
                                <td className="numeric-data">58</td>
                                <td className="numeric-data">87</td>
                                <td className="numeric-data">68.5</td>
                                <td className="numeric-data">86</td>
                                <td className="numeric-data">45</td>
                                <td className="numeric-data">6</td>
                                <td className="numeric-data">B</td>
                                <td className="remark">Excellent</td>
                            </tr>
                            <tr>
                                <td className="string-data subject-title">Agricultural Language</td>
                                <td className="numeric-data">8</td>
                                <td className="numeric-data">9</td>
                                <td className="numeric-data">8</td>
                                <td className="numeric-data">58</td>
                                <td className="numeric-data">87</td>
                                <td className="numeric-data">68.5</td>
                                <td className="numeric-data">86</td>
                                <td className="numeric-data">45</td>
                                <td className="numeric-data">6</td>
                                <td className="numeric-data">B</td>
                                <td className="remark">Excellent</td>
                            </tr>
                            <tr>
                                <td className="string-data subject-title">Agricultural Language</td>
                                <td className="numeric-data">8</td>
                                <td className="numeric-data">9</td>
                                <td className="numeric-data">8</td>
                                <td className="numeric-data">58</td>
                                <td className="numeric-data">87</td>
                                <td className="numeric-data">68.5</td>
                                <td className="numeric-data">86</td>
                                <td className="numeric-data">45</td>
                                <td className="numeric-data">6</td>
                                <td className="numeric-data">B</td>
                                <td className="remark">Excellent</td>
                            </tr>
                            <tr>
                                <td className="string-data subject-title">Agricultural Language</td>
                                <td className="numeric-data">8</td>
                                <td className="numeric-data">9</td>
                                <td className="numeric-data">8</td>
                                <td className="numeric-data">58</td>
                                <td className="numeric-data">87</td>
                                <td className="numeric-data">68.5</td>
                                <td className="numeric-data">86</td>
                                <td className="numeric-data">45</td>
                                <td className="numeric-data">6</td>
                                <td className="numeric-data">B</td>
                                <td className="remark">Excellent</td>
                            </tr>
                            <tr>
                                <td className="string-data subject-title">Agricultural Language</td>
                                <td className="numeric-data">8</td>
                                <td className="numeric-data">9</td>
                                <td className="numeric-data">8</td>
                                <td className="numeric-data">58</td>
                                <td className="numeric-data">87</td>
                                <td className="numeric-data">68.5</td>
                                <td className="numeric-data">86</td>
                                <td className="numeric-data">45</td>
                                <td className="numeric-data">6</td>
                                <td className="numeric-data">B</td>
                                <td className="remark">Excellent</td>
                            </tr>
                            <tr>
                                <td className="string-data subject-title">Agricultural Language</td>
                                <td className="numeric-data">8</td>
                                <td className="numeric-data">9</td>
                                <td className="numeric-data">8</td>
                                <td className="numeric-data">58</td>
                                <td className="numeric-data">87</td>
                                <td className="numeric-data">68.5</td>
                                <td className="numeric-data">86</td>
                                <td className="numeric-data">45</td>
                                <td className="numeric-data">6</td>
                                <td className="numeric-data">B</td>
                                <td className="remark">Excellent</td>
                            </tr>
                            <tr>
                                <td className="string-data subject-title">Agricultural Language</td>
                                <td className="numeric-data">8</td>
                                <td className="numeric-data">9</td>
                                <td className="numeric-data">8</td>
                                <td className="numeric-data">58</td>
                                <td className="numeric-data">87</td>
                                <td className="numeric-data">68.5</td>
                                <td className="numeric-data">86</td>
                                <td className="numeric-data">45</td>
                                <td className="numeric-data">6</td>
                                <td className="numeric-data">B</td>
                                <td className="remark">Excellent</td>
                            </tr>
                            <tr>
                                <td className="string-data subject-title">Agricultural Language</td>
                                <td className="numeric-data">8</td>
                                <td className="numeric-data">9</td>
                                <td className="numeric-data">8</td>
                                <td className="numeric-data">58</td>
                                <td className="numeric-data">87</td>
                                <td className="numeric-data">68.5</td>
                                <td className="numeric-data">86</td>
                                <td className="numeric-data">45</td>
                                <td className="numeric-data">6</td>
                                <td className="numeric-data">B</td>
                                <td className="remark">Excellent</td>
                            </tr>
                            <tr>
                                <td className="string-data subject-title">Agricultural Language</td>
                                <td className="numeric-data">8</td>
                                <td className="numeric-data">9</td>
                                <td className="numeric-data">8</td>
                                <td className="numeric-data">58</td>
                                <td className="numeric-data">87</td>
                                <td className="numeric-data">68.5</td>
                                <td className="numeric-data">86</td>
                                <td className="numeric-data">45</td>
                                <td className="numeric-data">6</td>
                                <td className="numeric-data">B</td>
                                <td className="remark">Excellent</td>
                            </tr>
                            <tr>
                                <td className="string-data subject-title">Agricultural Language</td>
                                <td className="numeric-data">8</td>
                                <td className="numeric-data">9</td>
                                <td className="numeric-data">8</td>
                                <td className="numeric-data">58</td>
                                <td className="numeric-data">87</td>
                                <td className="numeric-data">68.5</td>
                                <td className="numeric-data">86</td>
                                <td className="numeric-data">45</td>
                                <td className="numeric-data">6</td>
                                <td className="numeric-data">B</td>
                                <td className="remark">Excellent</td>
                            </tr>
                            <tr>
                                <td className="string-data subject-title">Agricultural Language</td>
                                <td className="numeric-data">8</td>
                                <td className="numeric-data">9</td>
                                <td className="numeric-data">8</td>
                                <td className="numeric-data">58</td>
                                <td className="numeric-data">87</td>
                                <td className="numeric-data">68.5</td>
                                <td className="numeric-data">86</td>
                                <td className="numeric-data">45</td>
                                <td className="numeric-data">6</td>
                                <td className="numeric-data">B</td>
                                <td className="remark">Excellent</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br />
                <div className="personal-info">
                    <div className="student-info">
                        <p><span>Number of subjects</span>10</p>
                        <p><span>Total marks obtainable:</span>1000</p>
                        <p className="align-right"><span>Marks obtained:</span>565</p>
                    </div>
                    <div className="student-info">
                        <p><span>Term Average</span>74.8</p>
                        <p><span>Position in CLASS:</span>34</p>
                        <p className="align-right"><span>Out of:</span>79</p>
                    </div>
                    <div className="student-info">
                        <p><span>Classs Teacher's remark</span>A poor performance. Your are joking</p>
                    </div>
                    <div className="student-info">
                        <p><span>Name</span>Mrs. R. F. Kenedy</p>
                        <p><span>Signature:</span>fed2424cabf9945obf</p>
                        <p className="align-right"><span>Date:</span>26th May 2020</p>
                    </div>
                    <div className="student-info">
                        <p><span>Principals remark:</span>A very good performance keep it up</p>
                    </div>
                    <div className="student-info principal-credentials">

                        <p><span>Name</span>Mrs. R. F. Kenedy</p>
                        <p><span>Signature:</span>fed2424cabf9945obf</p>
                        <p className="align-right"><span>Date:</span>26th May 2020</p>
                    </div>
                </div>
                <hr />
                <h5>Key to Grading</h5>
                <div className="student-info stamp-base">
                    <img className="stamp" src={stamp} />
                    <p>A - - - - - Distinction - - - - - 75 Above</p>
                </div>
                <div className="student-info">
                    <p>B - - - - - Very Good - - - - - 65 - 74</p>
                </div>
                <div className="student-info">
                    <p>C - - - - - Good - - - - - 55 - 64</p>
                </div>
                <div className="student-info">
                    <p>D - - - - - Fair - - - - - 40 - 54</p>
                </div>
            </div>
        </div>
    )
}
export default ResultPage