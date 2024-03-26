import CommonButton from '@/component/utils/CommonButton/CommonButton';
import SmallTitle from '@/component/utils/SmallTitle/SmallTitle';
import React from 'react';
import './GoTravle.css'

const GoTravel = () => {
    return (
        <div className='bg-HeadingColor/5'>
            <div className='container py-14 flex flex-col md:flex-row justify-start items-center gap-5 text-ParagraphColor'>
                <div className='flex-1'>
                    <SmallTitle
                        SmallTitle={'Go Travel, Discover Remember Us'}
                        SmallDescription={"We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes."}
                    ></SmallTitle>
                    <div className='max-w-sm space-y-4 mt-2'>

                        <div className='flex gap-2 items-center justify-start'>
                            <div>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#007F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>We are self-service data software visually
                                appealing data visualizations.
                            </div>
                        </div>

                        <div className='flex gap-2 items-center justify-start'>
                            <div>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#007F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>We are self-service data software visually
                                appealing data visualizations.
                            </div>
                        </div>

                        <div className='flex gap-2 items-center justify-start'>
                            <div>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7L5 11L15 1" stroke="#007F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>We are self-service data software visually
                                appealing data visualizations.
                            </div>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <CommonButton ButtonValue={'Descover Place'} NavegateLink={'/tour'}></CommonButton>
                    </div>
                </div>

                <div className='flex-1  grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-10'>


                    <div className='paranteDiv bg-WhiteColor rounded-md flex flex-col gap-5 p-5 hover:bg-PrimaryColor cursor-pointer hover:text-WhiteColor'>
                        <div className='children01 bg-PrimaryColor/10 p-5 w-fit rounded-md '>
                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5C12 6.06087 11.5786 7.07828 10.8284 7.82843C10.0783 8.57857 9.06087 9 8 9C6.93913 9 5.92172 8.57857 5.17157 7.82843C4.42143 7.07828 4 6.06087 4 5C4 3.93913 4.42143 2.92172 5.17157 2.17157C5.92172 1.42143 6.93913 1 8 1C9.06087 1 10.0783 1.42143 10.8284 2.17157C11.5786 2.92172 12 3.93913 12 5V5ZM8 12C6.14348 12 4.36301 12.7375 3.05025 14.0503C1.7375 15.363 1 17.1435 1 19H15C15 17.1435 14.2625 15.363 12.9497 14.0503C11.637 12.7375 9.85652 12 8 12V12Z" stroke="#007F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div>
                            <div>
                                <div className='font-bold text-2xl font-Truculenta'>
                                    <span>500</span>
                                    K+
                                </div>
                                <p className='text-xl font-medium'>Satisfied Clients</p>
                            </div>
                        </div>
                    </div>


                    <div className='paranteDiv bg-WhiteColor rounded-md flex flex-col gap-5 p-5 hover:bg-PrimaryColor cursor-pointer hover:text-WhiteColor'>
                        <div className='children01 bg-PrimaryColor/10 p-5 w-fit rounded-md '>

                            <svg width="35" height="29" viewBox="0 0 35 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33.4414 2.01859H28.3061C28.3146 1.68297 28.3276 1.35084 28.3276 1.0093C28.3276 0.451425 27.8762 0 27.3183 0H7.13237C6.5745 0 6.12307 0.451425 6.12307 1.0093C6.12307 1.35084 6.13612 1.6831 6.14454 2.01859H1.0093C0.451425 2.01859 0 2.47002 0 3.02789V5.58464C0 11.2193 4.51291 15.7964 10.0751 16.0924C11.2351 17.6879 12.6164 18.8724 14.1798 19.5452C13.9504 24.1507 11.5069 27.3404 10.7165 28.2603H23.7326C22.9424 27.3468 20.4994 24.176 20.2701 19.5452C21.8339 18.8726 23.2158 17.6882 24.3759 16.0924C29.9378 15.7962 34.4507 11.2192 34.4507 5.58464V3.02789C34.4507 2.47002 33.9993 2.01859 33.4414 2.01859ZM2.01859 5.58464V4.03719H6.24506C6.54617 7.88254 7.42103 11.2538 8.75821 13.9087C4.9467 13.0504 2.01859 9.65178 2.01859 5.58464ZM21.2941 8.7101L20 9.98451L20.2976 11.7764C20.3608 12.1539 20.205 12.5344 19.8955 12.7581C19.585 12.9836 19.1769 13.0137 18.8369 12.838L17.2253 12.0011L15.6138 12.838C15.2728 13.0115 14.8647 12.9829 14.5553 12.7581C14.2458 12.5344 14.0901 12.154 14.1531 11.7764L14.4508 9.98451L13.1567 8.7101C12.879 8.43658 12.7897 8.03293 12.9053 7.67914C13.0236 7.3164 13.3371 7.05028 13.7155 6.99315L15.5114 6.72306L16.3226 5.09971C16.6636 4.41568 17.7873 4.41568 18.1283 5.09971L18.9395 6.72306L20.7353 6.99315C21.1138 7.05034 21.4272 7.31646 21.5455 7.67914C21.6637 8.04282 21.5661 8.44203 21.2941 8.7101ZM32.4321 5.58464C32.4321 9.65164 29.504 13.0503 25.6926 13.9085C27.0297 11.2537 27.9047 7.88268 28.2056 4.03719H32.4321V5.58464Z" fill="#007F5F" />
                            </svg>

                        </div>
                        <div>
                            <div>
                                <div className='font-bold text-2xl font-Truculenta'>
                                    <span>250</span>
                                    +
                                </div>
                                <p className='text-xl font-medium'>Active Achieve</p>
                            </div>
                        </div>
                    </div>


                    <div className='paranteDiv bg-WhiteColor rounded-md flex flex-col gap-5 p-5 hover:bg-PrimaryColor cursor-pointer hover:text-WhiteColor'>
                        <div className='children01 bg-PrimaryColor/10 p-5 w-fit rounded-md '>

                            <svg width="48" height="35" viewBox="0 0 48 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.6941 22.2836C38.4935 23.4151 37.0183 24.2505 35.378 24.6867C36.9153 27.1219 37.9654 29.9065 38.3533 32.9191C38.4277 33.5008 38.3203 34.0652 38.0728 34.5768H46.5122C46.7823 34.5768 47.0463 34.4531 47.2341 34.2383C47.4142 34.0339 47.5 33.7727 47.468 33.5233C46.8452 28.6738 43.7965 24.5335 39.6941 22.2836Z" fill="#007F5F" />
                                <path d="M29.9612 18.9587C30.2989 19.1985 30.6235 19.4548 30.9446 19.7144C31.2675 19.9758 31.587 20.2408 31.8924 20.5213C32.7624 21.3161 33.5633 22.1851 34.2861 23.1208C35.6522 22.8716 36.9021 22.2889 37.9478 21.4579C38.2109 21.2485 38.4627 21.0277 38.6983 20.7896C38.919 20.5663 39.1233 20.3274 39.3173 20.0815C40.4306 18.6669 41.1005 16.8899 41.1005 14.9551C41.1005 10.3749 37.3737 6.64819 32.7936 6.64819C31.831 6.64819 30.91 6.8209 30.0495 7.12422C30.3499 8.18251 30.5212 9.29486 30.5212 10.4484C30.5212 13.1951 29.5992 15.725 28.0628 17.7675C28.7173 18.1328 29.3526 18.5251 29.9612 18.9587Z" fill="#007F5F" />
                                <path d="M17.5274 34.5769H19.0788H35.2107C35.6324 34.5769 36.028 34.4012 36.2971 34.0964C36.5336 33.829 36.6391 33.4905 36.5932 33.1451C36.207 30.13 35.0947 27.3669 33.4638 25.0019C33.263 24.7118 33.0595 24.4245 32.844 24.1466C32.5964 23.8297 32.3333 23.5267 32.0674 23.2254C31.3039 22.3649 30.4661 21.5765 29.5596 20.8717C29.2498 20.6302 28.9303 20.4017 28.6048 20.181C28.2871 19.9653 27.9693 19.7524 27.6386 19.5568C27.3911 19.4096 27.1358 19.2746 26.8804 19.1387C26.6302 19.3872 26.3696 19.6244 26.0978 19.8512C25.8701 20.0399 25.6303 20.213 25.3889 20.3861C25.1498 20.5574 24.9023 20.7177 24.6503 20.8708C24.5301 20.9445 24.4125 21.0215 24.2885 21.0906C24.2513 21.1116 24.2167 21.1365 24.1795 21.1565C22.4343 22.1191 20.432 22.6696 18.302 22.6696C14.9601 22.6696 11.9304 21.3183 9.72196 19.1377C4.56487 21.8776 0.798364 26.9978 0.010089 33.1389C-0.0348894 33.4868 0.0715018 33.8263 0.309657 34.0972C0.577509 34.4009 0.972799 34.5766 1.39217 34.5766H16.5451H17.5274V34.5769Z" fill="#007F5F" />
                                <path d="M10.7702 17.6689C10.9892 17.8965 11.2185 18.1138 11.4571 18.3215C13.2927 19.9195 15.6828 20.8951 18.3023 20.8951C20.2951 20.8951 22.1527 20.3237 23.7395 19.3517C23.9937 19.195 24.2404 19.0298 24.4792 18.8539C24.7096 18.6842 24.9328 18.5085 25.1467 18.3216C25.1614 18.3087 25.1752 18.2947 25.1899 18.2826C25.4125 18.0871 25.628 17.8834 25.8332 17.6689C26.0504 17.442 26.259 17.2083 26.4555 16.9625C27.8873 15.1744 28.7496 12.9115 28.7496 10.4471C28.7496 9.56887 28.6292 8.72048 28.4232 7.90423C28.3478 7.60553 28.2622 7.31216 28.1617 7.02384C28.0631 6.74128 27.9548 6.46291 27.8337 6.19073C26.2002 2.54762 22.5467 0 18.3023 0C12.5422 0 7.85553 4.68669 7.85553 10.4472C7.85553 12.911 8.71733 15.1737 10.1487 16.9618C10.3446 17.2083 10.5529 17.442 10.7702 17.6689Z" fill="#007F5F" />
                            </svg>

                        </div>
                        <div>
                            <div>
                                <div className='font-bold text-2xl font-Truculenta'>
                                    <span>15</span>
                                    K+
                                </div>
                                <p className='text-xl font-medium'>Active Members</p>
                            </div>
                        </div>
                    </div>


                    <div className='paranteDiv bg-WhiteColor rounded-md flex flex-col gap-5 p-5 hover:bg-PrimaryColor cursor-pointer hover:text-WhiteColor'>
                        <div className='children01 bg-PrimaryColor/10 p-5 w-fit rounded-md '>

                            <svg width="27" height="35" viewBox="0 0 27 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.2254 34.4507L23.7155 21.0021L23.7273 20.9873C25.4405 18.7046 26.3462 15.9842 26.3462 13.1209C26.3462 5.88625 20.46 0 13.2254 0C5.99075 0 0.104492 5.88625 0.104492 13.1209C0.104492 15.9842 1.01023 18.7046 2.73524 21.0021L13.2254 34.4507ZM13.2254 4.03719C18.2343 4.03719 22.309 8.11197 22.309 13.1209C22.309 18.1298 18.2343 22.2045 13.2254 22.2045C8.21646 22.2045 4.14168 18.1298 4.14168 13.1209C4.14168 8.11197 8.21646 4.03719 13.2254 4.03719Z" fill="#007F5F" />
                            </svg>

                        </div>
                        <div>
                            <div>
                                <div className='font-bold text-2xl font-Truculenta'>
                                    <span>10</span>
                                    K+
                                </div>
                                <p className='text-xl font-medium'>Tour Destination</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default GoTravel;