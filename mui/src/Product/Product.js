import  React, { useState }from "react";
import "./style.css";
import img from "../assets/productImage.jpg";
import heart from "../assets/Heart.png";
import priceIcon from "../assets/PriceIcon.png";
import star from "../assets/star.png";
import verified from "../assets/verified.png";
import naaya from "../assets/Logo.png";
import frame from "../assets/Frame.png";
import profile from "../assets/Profile.png";
import message from "../assets/Message.png";

const Product = () => {
  const [con, setCon] = useState(0); 

  return (
    <>
    <div className="container">
      <div className="card-box">
        <div className="left-side-first">
          <img className="heart" src={heart} alt="Heart"></img>
          <img className="product" src={img} alt="Product"></img>
        </div>

        <div className="media-card-left">
          <div className="media-card">
            <img className="product1" src={img} alt="product"></img>
          </div>

          <div className="media-card">
            <img className="product1" src={img} alt="product"></img>
          </div>

          <div className="media-card">
            <img className="product1" src={img} alt="product"></img>
          </div>

          <div className="media-card">
            <img className="product1" src={img} alt="product"></img>
          </div>
        </div>
      </div>


      <div className="content-container">
        <div className="left-side-second">
          <p className="para">Apple Iphone 13 Pro Max (128 GB) 4GB RAM</p>
          <div className="price-info">
            <img className="price-icon" src={priceIcon} alt="Price"></img>
            <span className="price-label">Price:</span>
            <span className="price">₹ 50,000 / unit</span>
          </div>
          <div class="category-info">
            <p className="tech">Category : Technology</p>
          </div>

          <div className="additional-info">
            <ul>
              <li>15 cm (6.1-inch) Super Retina XDR display</li>
              <li>
                Cinematic mode adds shallow depth of field and shifts focus
                automatically in your videos
              </li>
              <li>
                Advanced dual-camera system with 12MP Wide and Ultra Wide
                cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby
                Vision HDR recording
              </li>
              <li>
                12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR
                recording
              </li>
            </ul>
          </div>
        </div>

        <div className="media-card-container">
  
        <div className="media-card-right">
          <div className="box-container">
            <div className="box1">
              <span className="minus">-</span>
              <span className="text">2</span>
              <span className="plus">+</span>
            </div>
            <div className="box2">
              <div className="cart-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </div>
              <p>Start Order</p>
            </div>
            <div className="box3">
              <div className="send-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" />
                </svg>
              </div>
              <p> Send Enquiry </p>
            </div>

          </div>
        </div>
        
      </div>
      </div>


      <div className="right-side-card">
        <div className="sub-right-side">
          <p className="para-1"> Seller Details </p>

          <div className="rating">
            <img src={star} className="star"></img>
            <p className="para-2"> 4.5 </p>
          </div>
        </div>
        <hr />
        <div className="manu">
          <p className="para-2">ABC Manufactures</p>
          <img src={verified} className="verified"></img>
        </div>
        <div className="logo">
          <img src={naaya} className="naaya"></img>
        </div>
        <div className="profile">
          <img src={profile} className="profile"></img>
          <p className="para-3"> Proprietor : </p>
        </div>
        <div className="para-4"> Mr. Rahul Sharma </div>
        <div className="location">
          <img src={frame} className="frame"></img>
          <p className=" Address"> Address</p>
        </div>
        <div className="description">
          <p className="para-5">
            Apple Store JD Alves Premises 60 B, Hill Road Bandra West Mumbai
            Maharashtra 400050
          </p>
        </div>
        <div className="follow">
          <img src={profile} className="profile"></img>
          <span>+</span>
          <p className="para-6">Follow</p>
        </div>
        <div className="message">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clip-path="url(#clip0_313_30)">
              <path
                d="M3.33333 17.4998V6.6665C3.33333 6.00346 3.59672 5.36758 4.06556 4.89874C4.5344 4.4299 5.17029 4.1665 5.83333 4.1665H14.1667C14.8297 4.1665 15.4656 4.4299 15.9344 4.89874C16.4033 5.36758 16.6667 6.00346 16.6667 6.6665V11.6665C16.6667 12.3295 16.4033 12.9654 15.9344 13.4343C15.4656 13.9031 14.8297 14.1665 14.1667 14.1665H6.66666L3.33333 17.4998Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 9.1665V9.17525"
                stroke="white"
                stroke-width="1.83333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.66667 9.1665V9.17525"
                stroke="white"
                stroke-width="1.83333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.3333 9.1665V9.17525"
                stroke="white"
                stroke-width="1.83333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_313_30">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="para-6">Chat Now</p>
        </div>
      </div>
    </div>
 {/* HERO SECTION */}

 <div className="overview-section-container">
  <div className="overview-section">
    <div className="overview-head">
    <div onClick={() => setCon(0)} className="product-desc">Product Overview</div>
    <div onClick={() => setCon(1)} className="customer-review">Customer Reviews</div>
    <div onClick={() => setCon(2)} className="company">Company Overview</div>
  </div>
  </div>
  <hr />
  {con === 0 && <> <div>
     <div className="list-item">
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </li>
              <li>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </li>
              <li>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              </li>
              <li>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </li>
              <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              </li>
              <li>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              </li>
            </ul>
          </div></div>
        
          </>
          }
  {con === 1 && <div>
    
    </div>}
  {con === 2 && <div></div>}
 
 
    </div> 
    </>
     
  );
};

export default Product;
