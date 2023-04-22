import React, { Component } from 'react'
import './CSS/style.css'
export default class Carousal extends Component {
  constructor(props){
    super(props)
    this.state = {
      ShortTitle: {
        STitle1: "Make a Relaxing Kitchen",
        STitle2: "Modern style cabinets",
        STitle3: "Which cabinet is best for kitchen?"
      },
      Paragraph: {
        paragraph1: "Firstly, the kitchen needs to function well for food preparation and cooking. Even a small kitchen, when well designed, can provide a novice home cook or a Michelin starred chef with a good workspace for meal preparation. The key aspects for efficient kitchen design are well known within the design community and include creating a ‘work triangle’ (between your refrigerator, sink, and cook top), providing adequate storage, and ensuring (when possible) a sizeable clear surface for food preparation.The key aspects for efficient kitchen design are well known within the design community and include creating.",
        paragraph2: "Modern kitchen cabinets feature flat slab doors that avoid excessive details. No crown molding, raised panels or decorative carvings are seen, emphasizing flat, sleek surfaces instead. The simplicity of a modern kitchen design allows for a more spacious and airy feel in your kitchen.The simplicity of a modern kitchen design allows for a more spacious and airy feel in your kitchen.No crown molding, raised panels or decorative carvings are seen, emphasizing flat, sleek surfaces instead.",
        paragraph3: "The highest quality kitchen cabinets are made of cabinet-grade multi-layer plywood. Plywood cabinets are strong, easier to install and considerably lighter in weight than MDF or particleboard cabinets. While more expensive, plywood cabinets are a good choice if you expect to own the house for a long period.The simplicity of a modern kitchen design allows for a more spacious and airy feel in your kitchen. Plywood cabinets are strong, easier to install and considerably lighter in weight than MDF or particleboard cabinets."
      },
      Channel:{
        CName1: "Stack overflow",
        CName2: "Query Selector",
        CName3: "Stack Cannel"
      },
      Date:{
        Date1: "20 Dec, 2022",
        Date2: "2 Jan, 2023",
        Date3: "5 Jan, 2023"
      }
    }
  }
  render() {
    return (
      <div> 
        <div id="carouselExampleControls" class="carousel slide carousel-fade container mt-5" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <div className='row'>
            <div className='col-md-6'>
            <img src="img/1.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div className='col-md-6'>
                 <h3 className='ShortTitle'>{this.state.ShortTitle.STitle1}</h3>
                 <p>{this.state.Paragraph.paragraph1}</p>
                 <p className='ChannelName'>{this.state.Channel.CName1}</p>
                 <p className='Date'>{this.state.Date.Date1}</p>
            </div>
        </div>
    </div>
    <div class="carousel-item">
        <div className='row'>
            <div className='col-md-6'>
            <img src="img/2.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div className='col-md-6'>
                 <h3 className='ShortTitle'>{this.state.ShortTitle.STitle2}</h3>
                 <p>{this.state.Paragraph.paragraph2}</p>
                 <p className='ChannelName'>{this.state.Channel.CName2}</p>
                 <p className='Date'>{this.state.Date.Date2}</p>
            </div>
        </div>
    </div>
    <div class="carousel-item">
        <div className='row'>
            <div className='col-md-6'>
            <img src="img/3.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div className='col-md-6'>
                 <h3 className='ShortTitle'>{this.state.ShortTitle.STitle3}</h3>
                 <p>{this.state.Paragraph.paragraph3}</p>
                 <p className='ChannelName'>{this.state.Channel.CName3}</p>
                 <p className='Date'>{this.state.Date.Date3}</p>
            </div>
        </div>
    </div>



  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
  <h3 className='mt-5'>Recent Post</h3>
</div>
    </div>
    )
  }
}
