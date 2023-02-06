import React from 'react';
import "../styles/methodologies.scss";


function Methodologies() {
    return (
        <div className='method-main'>
            <div className="home-bg"></div>
            <div className="method-card">
                <h1 className='method-header'>METHODOLOGIES</h1>
                {/* <div className="title">
                    Loans to Storage Providers
                </div>
                <div className="tag">
                    Your reputation score will light your path to upscaling.
                </div> */}
                <div className="benefits">
                    <ul className="list">
                        <li className="data">
                            The current day and age bring a need for optimized file-storing solutions. The Paradigm protocol births to make upscaling of storage infrastructure simple and secure for small-scale storage providers.
                        </li>
                        <li className="data">
                            Paradigm offers loans to storage providers registered in the filecoin ecosystem. We check the eligibility of storage providers by calculating their credit scores and providing collateralized loans accordingly.
                        </li>
                        <li className="data">
                            Storage providers can avail loans to expand their storage setup in a secure DeFi environment that has to be repaid as per protocol dictated by the algorithm.
                        </li>
                        <li className="data">
                            The credit score system shows credibility of the user while showing the FIL availability to the user.
                            <ul className='list-inner'>
                                <li className="data">Stake money (+ earned by mining)</li>
                                <li className="data">Previous Income Generated</li>
                                <li className="data">FILs' Reputation Score</li>
                            </ul>
                        </li>
                        <li className="data">The credit score is out of 100 and the 3 parts have a division as follows:
                            <ul className='list-inner'>
                                <li className="data">30% comes from Staking</li>
                                <li className="data">30% of Previous Income Generated (P.I.G) value</li>
                                <li className="data">40% derived from the FILs' Reputation Score</li>
                            </ul>
                        </li>
                        <ul className="list2">
                            <li className="data">
                                <span className='tag'>Credit Score calculation from the Staking</span> <br /> <br />
                                A user stakes a certain amount of FIL in the filecoin ecosystem to initiate their journey of being a storage provider. This stake amount rewards SPs as they run their node.

                                <br /><br />
                                Furthermore, the storage provider now stakes a certain amount to avail a loan.

                                <br /><br />
                                Considering the stake amount, a value of the credit score of the storage provider is generated.

                                <br /><br />
                                The calculation considers a loan amount that is twice the amount a SP needs to run a 1PB node. A ratio of the loan amount to staked amount is calculated. The value of the ratio is considered for the credit score

                                <br /><br />
                                If the value comes
                                <ul className='list-inner'>
                                    <li className="data">1.5 and above, the users get a 30/30 score</li>
                                    <li className="data">0.5 - 1.5, the users will get a value less than 30</li>
                                    <li className="data">0.5 or less, the users avail undercollateralized loan</li>
                                </ul>

                            </li>

                            <li className="data">
                                <span className='tag'>Credit Score calculation from the P.I.G value</span> <br /> <br />
                                The P.I.G value is a summation of average monthly income generated by the storage provider. The calculation for the average monthly income comes from 4 data sets.

                                <ul className='list-inner'>
                                    <li className="data">Data set of income in last 24 hrs * 30, to estimate income earned in 30 days.</li>
                                    <li className="data">Data set of income in the last 7 days * 4.28, to estimate income of 30 days.</li>
                                    <li className="data">Data set of income in the last 30 days * 1, the value of income in 30 current days.</li>
                                    <li className="data">Data set of income in the last 1 year / 12, the average income of 1 month throughout last year.</li>
                                </ul>

                                <br />
                                A summation of the 4 values is calculated as:
                                <br />
                                &Sigma;i = a+b+c+d/ 4
                                <br />
                                Index:
                                <br />
                                &nbsp;&nbsp;&Sigma;i = Summation of income
                                <br />
                                <ul className='list-inner'>
                                    <li className="data">monthly average of income in 24 hrs</li>
                                    <li className="data">monthly average of income in 7 days</li>
                                    <li className="data">monthly average of income in 30 days</li>
                                    <li className="data">monthly average of income in the previous year</li>
                                </ul>
                                <br />
                                If and when the summation value equals the EMI value (of 10 months), then the user has a full credit score of 30. If the value is less, the credit score value decreases proportionally.
                            </li>

                            <li className="data">
                                <span className='tag'>FILs' Reputation Score</span> 
                                <br /> <br />
                                The last method is FILs' Reputation Score. The reputation score comes directly from the FILRep APi. Although the API gives a value out of 100, we convert it 40, to calculate our credit score.
                            </li>
                        </ul>
                    </ul>

                </div>
            </div>
        </div>

    )
}

export default Methodologies;