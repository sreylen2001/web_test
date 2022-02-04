import React from "react";
// import pr_daungte from "../images/pr_daungte.jpg";
import res_header from "../images/res_header.png";
import res_sr1 from "../images/res_sr1.png";
import res_sr2 from "../images/res_sr2.jpg";
import res_sr3 from "../images/res_sr3.jpg";
import res_kp1 from "../images/res_kp1.jpg";
import res_kp2 from "../images/res_kp2.jpg";
import res_kps1 from "../images/res_kps1.jpg";
import res_kps2 from "../images/res_kps2.jpg";
import res_kps3 from "../images/res_kps3.jpg";
import "../styles/Restaurant.css";

export const Restaurant = () => {
  return (
    <div>
      <img src={res_header} class="d-block w-100" alt="" />
      <div className="container mt-5">
        <div className="card">
          <div className="row">
            <div className="col-md-4">
              <img src={res_sr1} className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h3 className="card-title mt-2">Grill Wine Café</h3>
              <p>Service options: Dine-in · Takeaway · No delivery</p>
              <p>Address: # 54 Street Sivuth Mondul 2 Village, 17252 </p>
              <p>Hours: Open ⋅ Closes 12AM</p>
              <p>Phone: 069 993 888</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="row">
            <div class="col-md-4">
              <img src={res_sr2} class="img-fluid" />
            </div>
            <div class="col-md-8">
              <h3 class="card-title mt-2">JOMNO - Modern Khmer Cuisine</h3>
              <p>Service options: Dine-in · Takeaway · Delivery</p>
              <p>Address: Wat Damnak Road Siem Reap, 17252 </p>
              <p>Hours: Open ⋅ Closes 10:30PM</p>
              <p>Phone: 092 762 539</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="row">
            <div class="col-md-4">
              <img src={res_sr3} class="img-fluid" />
            </div>
            <div class="col-md-8">
              <h3 class="card-title mt-2">
                WILD - Creative Bar and Restaurant
              </h3>
              <p>Service options: Dine-in · Takeaway · Delivery</p>
              <p>Address: Wat Damnak Krong Siem Reap, 17000</p>
              <p>Hours: Opens ⋅ 11AM </p>
              <p>Phnone: N/A</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="row">
            <div class="col-md-4">
              <img src={res_kp1} class="img-fluid" />
            </div>
            <div class="col-md-8">
              <h3 class="card-title mt-2">Cuisine @ Coffee and Cocktails</h3>
              <p>
                Service options: Dine-in · Curbside pickup · No-contact delivery
              </p>
              <p>Address: Shop 8 - Street 722, Krong Kampot 07000</p>
              <p>Hours: Opens ⋅ 6PM</p>
              <p>Phone: 088 923 2059</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="row">
            <div class="col-md-4">
              <img src={res_kp2} class="img-fluid" />
            </div>
            <div class="col-md-8">
              <h3 class="card-title mt-2">Atelier kampot</h3>
              <p>Service options: Dine-in · Takeaway · Delivery</p>
              <p>Address: ផ្លូវលេខ ៧៣៥, Krong Kampot </p>
              <p>Hours: Opens ⋅ 8AM</p>
              <p>Phone: 010 446 044</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="row">
            <div class="col-md-4">
              <img src={res_kps1} class="img-fluid" />
            </div>
            <div class="col-md-8">
              <h3 class="card-title mt-2">
                Samurai Japanese Restaurant and Bar
              </h3>
              <p>Service options: Dine-in · Takeaway</p>
              <p>Address: #127 7 Makara St, Preah Sihanouk 80133</p>
              <p>Hours: Opens ⋅ 11:30AM</p>
              <p>Phone: 034 934 879</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="row">
            <div class="col-md-4">
              <img src={res_kps2} class="img-fluid" />
            </div>
            <div class="col-md-8">
              <h3 class="card-title mt-2">Chapei Yeak Restaurant</h3>
              <p>Service options: Dine-in · Takeaway · Delivery</p>
              <p>Address: 28 Mithona St, Preah Sihanouk 18000</p>
              <p>Hours: Opens ⋅ 7AM</p>
              <p>Phone: 098 268 005</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="row">
            <div class="col-md-4">
              <img src={res_kps3} class="img-fluid" />
            </div>
            <div class="col-md-8">
              <h3 class="card-title mt-2">La Vogue Sky Bar</h3>
              <p>Service options: Dine-in</p>
              <p>
                Address: Lot 1171, La Vogue Boutique Hotel and Casino Land, 502
                Serendipity Beach Street (502), Preah Sihanouk
              </p>
              <p>Hours: Open ⋅ Closes 2AM</p>
              <p>Phone: 015 240 583</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
