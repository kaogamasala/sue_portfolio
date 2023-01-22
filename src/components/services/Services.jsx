import React, { useState } from 'react';
import './services.css';

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = index => {
    setToggleState(index);
  }

return (
  <section className="services section" id="services">
    <h2 className="section_title">Services</h2>
      <span className="section_subtitle">What is offer</span>

      <div className="services_container container grid">

        {/*========== Service 1 ==========*/}
        <div className="services_content">
          <div>
            <i className="uil uil-web-grid services_icon"></i>
            <h3 className="services_title">
              Product <br /> Manager
            </h3>
          </div>

          <span className="services_button" onClick={() => 
          toggleTab(1)}>
            View More
          <i className="uil uil-arrow-right services_button-icon"></i></span>

          <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
            <div className="services_modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

              <h3 className="services_modal-title">Product Manager</h3>
              <p className="services_modal-description">広告メディアからWeb、ネイティブアプリまで様々なプロダクトの経験があります。</p>

              <ul className="services_modal-services grid">

                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      広告メディアやレコメンドエンジン開発
                    </p>
                </li>

                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      Webやネイティブアプリ開発
                    </p>
                </li>

                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      プロトタイプ開発
                    </p>
                </li>

              </ul>
            </div>
          </div>
        </div>
        
        {/*========== Service 2 ==========*/}
        <div className="services_content">
          <div>
            <i className="uil uil-arrow services_icon"></i>
            <h3 className="services_title">
              Product <br /> Designer
            </h3>
          </div>

          <span className="services_button" onClick={() => 
          toggleTab(2)}>
            View More
          <i className="uil uil-arrow-right services_button-icon"></i></span>

          <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
            <div className="services_modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

              <h3 className="services_modal-title">Product Designer</h3>
              <p className="services_modal-description">雑誌のレイアウトデザインからキャリアをスタートした強みを活かし、人間中心設計を元にしたUIUXデザインを得意としています。</p>

              <ul className="services_modal-services grid">

                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      Web、ネイティブアプリのプロダクトデザイン
                    </p>
                </li>

                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      ダッシュボードや管理画面などのtoB向けデザイン
                    </p>
                </li>

                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      モックアップ制作
                    </p>
                </li>

              </ul>
            </div>
          </div>
        </div>

        {/*========== Service 3 ==========*/}
        <div className="services_content">
          <div>
            <i className="uil uil-edit services_icon"></i>
            <h3 className="services_title">
              Design <br /> Engineer
            </h3>
          </div>

          <span className="services_button" onClick={() => 
          toggleTab(3)}>View More
          <i className="uil uil-arrow-right services_button-icon"></i></span>

          <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
            <div className="services_modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

              <h3 className="services_modal-title">
              Design Engineer</h3>
              <p className="services_modal-description">デザイン力とコーディング力を活かし、素早いプロトタイプ開発を得意としています。</p>

              <ul className="services_modal-services grid">

                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      FigmaによるUIUXデザイン
                    </p>
                </li>

                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      デザインイメージを元にしたフロントエンド開発
                    </p>
                </li>

                <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">
                      プロトタイプを使ったユーザーインタビュー
                    </p>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
</section>

)
}

export default Services