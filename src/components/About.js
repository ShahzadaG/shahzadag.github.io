import React from 'react'
import { Devices } from '../data/Devices';
import { FontAwesome } from '../data/FontAwesome';

export default function About() {

    return (
        <div>

            <h5>As-Salamu Alaykum</h5>
            <p></p>
            SmartAzanClock.com is an online adhan clock which can also be used to turn any Android or Raspberry Pi device into an actual adhan clock.
            <p></p>

            <div className='d-flex flex-column gap-2'>
                <div className='d-flex flex-row'>
                    <div className='mx-1'>{FontAwesome.Check}</div>
                    <div>It's free, safe and open source.</div>
                </div>

                <div className='d-flex flex-row'>
                    <div className='mx-1'>{FontAwesome.Check}</div>
                    <div>There's no registration, subscriptions, app store downloads or browser cookies.</div>
                </div>

                <div className='d-flex flex-row'>
                    <div className='mx-1'>{FontAwesome.Check}</div>
                    <div>It works even when offline.</div>
                </div>

                <div className='d-flex flex-row'>
                    <div className='mx-1'>{FontAwesome.Check}</div>
                    <div>It doesn't require any specific Android device or brand.</div>
                </div>
            </div>

            <p></p>

            <div className='mb-3 subMenu'>
                <ul className="nav nav-pills" id="pills-tab" role="tablist">

                    <li className="nav-item" role="presentation">
                        <button className="nav-link btn-sm rounded-0 rounded-top active" data-bs-toggle="pill" data-bs-target="#anrdoid-instructions" type="button">
                            {FontAwesome.Android} Android
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link btn-sm rounded-0 rounded-top" data-bs-toggle="pill" data-bs-target="#rpi-instructions" type="button">
                            {FontAwesome.RPi} Raspberry Pi
                        </button>
                    </li>
                </ul>
                <div className="tab-content bg-primary rounded-bottom rounded-end px-3 py-2" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="anrdoid-instructions">
                        Add smartazanclock.com to your home screen and run it. That's it!
                    </div>
                    <div className="tab-pane fade" id="rpi-instructions">
                        <a href="/setup/rpi/" className='whiteLink'>Instructions to run SmartAzanClock.com on a Raspberry Pi in kiosk mode.</a>
                    </div>
                </div>
            </div>

            <p></p>

            Some commonly used Android devices:
            <div className='d-flex flex-row justify-content-between flex-nowrap gap-2 mt-2'>
                {Devices.map(d => (
                    <div key={'d' + d.id}>
                        <a className='btn btn-secondary col-12' href={d.link} target="_blank">
                            <small>{d.name}</small>
                        </a>
                    </div>
                ))}
            </div>

            <p></p>

            <a className='btn btn-warning col-12' href="https://ebay.us/XF3NsK" target="_blank" rel="noreferer">
                Prefer a readily set up device?<br />Check out our listings on {FontAwesome.Ebay}
            </a>


            <div className='d-flex flex-row justify-content-between gap-1 align-items-center mt-2'>
                <div>
                    <a className='btn btn-lg btn-dark' title='Privacy Policy' href="/privacy-policy/" target="_blank" rel="noreferrer">{FontAwesome.Shield}</a>
                </div>
                <div>
                    <a className='btn btn-lg btn-dark' title='Open Source Code' href="https://github.com/smartazanclock/pwa" target="_blank" rel="noreferrer">{FontAwesome.Github}</a>
                </div>
                <div>
                    <a className='btn btn-lg btn-dark' title='Prayer Times Chrome Extension' href="https://chrome.google.com/webstore/detail/prayer-times-chrome-exten/fbkmgnkliklgbmanjkmiihkdioepnkce">{FontAwesome.Chrome}</a>
                </div>
                <div>
                    <a className='btn btn-lg btn-dark' title='smartazanclock@gmail.com' href="mailto:smartazanclock@gmail.com">{FontAwesome.Envelope}</a>
                </div>
            </div>

            <p></p>

        </div >
    )
}

