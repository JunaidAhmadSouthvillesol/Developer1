import React from 'react';
import './section-right.scss';
import Card from '../Card/Card';
const Right = () => {
    return (
        <>
            <aside>
                <div className="right-main">
                <Card>
                    <div className="right-container-top">
                        <div className="right-title-top">
                            <h4>hope condition</h4>
                            <p><i className="fa-solid fa-pen"></i> edit</p>
                        </div>
                        <div className="right-content-top">
                            <p>Occupation--</p>
                            <p>On duty -----</p>
                            <p>Work Style--</p>
                            <p>Facility ----- <br/>form</p>
                            <p>annual   ----<br/>income</p>
                        </div>
                    </div>
                </Card>
                <Card>
                    <div className="right-container-bottom">
                        <div className="right-title-bottom">
                            <h4><span> Personal Information</span> (private)</h4>
                            <p><i className="fa-solid fa-pen"></i> edit</p>
                        </div>
                        <div className="right-content-bottom">
                            <a href="/"><i class="fa-solid fa-user"></i>  --- ---</a>
                            <a href="/">---</a>
                            <a href="/"><i class="fa-solid fa-envelope"></i> junaidahmad@southvillesol.com</a>
                            <a href="/"><i class="fa-solid fa-phone-flip"></i> ---</a>
                            <a href="/"><i class="fa-solid fa-house"></i> ---</a>
                            <a href="/"><i class="fa-solid fa-building-columns"></i> <span> Transfer account not set</span></a>
                        </div>
                    </div>
                </Card>
                </div>
            </aside>
        </>
    );
}
export default Right;