export default async function Home(){
    setTimeout(function(){
        $('.agency-sponsor-carousel').owlCarousel({
            autoplay:true,
            autoplayTimeout:1800,
            loop:true,
            margin:30,
            nav:false,
            dots : false,
            responsive:{
                0:{
                    items:5
                },
                600:{
                    items:5
                },
                1000:{
                    items:6
                }
            }
        })
        $('.owl-carousel-nav').owlCarousel({
            autoplay:true,
            autoplayTimeout:4000,
            loop:true,
            margin:0,
            nav:false,
            dots : false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })
    }, 50);
   
    return (` 
        <section class="relative  z-[4]">
            <div class="owl-carousel owl-theme owl-carousel-nav">
                <div class="item">
                        <div class="z-[4] relative bg-[url('https://nou-bakery.myshopify.com/cdn/shop/files/img-slider-2_x1024.jpg?v=1613698765')] h-[90vh] w-full bg-no-repeat bg-center bg-cover">
                        <div class="absolute top-[-60px] left-[0px]  w-full h-[80px] bg-repeat bg-[url('https://nou-bakery.myshopify.com/cdn/shop/t/7/assets/down.png')] "></div>
                        <div class=" absolute bottom-[0px] left-[0px] w-full h-[80px] bg-repeat bg-[url('https://nou-bakery.myshopify.com/cdn/shop/t/7/assets/up.png')] "></div>
                        <div class="z-[444] relative w-full flex justify-center items-center h-full">
                        <div class="flex flex-col items-center gap-9">
                            <div><h1 class=" font-bold text-[40px] uppercase">we implement sweet dream</h1></div>
                            <div class="flex flex-col gap-[2px] text-[#4e3939;] font-bold">
                                <span>Carrot cake macaroon topping jelly-o dessert cake. Tiramisu gummies wafer brownie tiramisu</span>
                                <span>gummies wafer brownie tiramisu cake. Icing powder candy canes cotton candy pie liquorice.</span>
                            </div>
                            <div class="bg-[#ee7560] uppercase rounded-full text-white py-4 px-10">Try our cupcakes</div>
                        </div>
                        </div>
                </div>
                </div>
                        <div class="item">
                        <div class="z-[4] relative bg-[url('https://nou-bakery.myshopify.com/cdn/shop/files/img-slider-1_x1024.jpg?v=1613698765')] h-[90vh] w-full bg-no-repeat bg-center bg-cover">
                        <div class="absolute top-[-60px] left-[0px]  w-full h-[80px] bg-repeat bg-[url('https://nou-bakery.myshopify.com/cdn/shop/t/7/assets/down.png')] "></div>
                        <div class=" absolute bottom-[0px] left-[0px] w-full h-[80px] bg-repeat bg-[url('https://nou-bakery.myshopify.com/cdn/shop/t/7/assets/up.png')] "></div>
                        <div class="z-[444] relative w-full flex justify-center items-center h-full">
                        <div class="flex flex-col items-center gap-9">
                            <div><h1 class=" font-bold text-[40px] uppercase">we implement sweet dream</h1></div>
                            <div class="flex flex-col gap-[2px] text-[#4e3939;] font-bold">
                                <span>Carrot cake macaroon topping jelly-o dessert cake. Tiramisu gummies wafer brownie tiramisu</span>
                                <span>gummies wafer brownie tiramisu cake. Icing powder candy canes cotton candy pie liquorice.</span>
                            </div>
                            <div class="bg-[#ee7560] uppercase rounded-full text-white py-4 px-10">Try our cupcakes</div>
                        </div>
                        </div>
                </div>
                </div>
            </div>
        </section>
        <section class="my-[60px]">
            <div class="container">
                <div class="flex gap-5">
                    <div class="w-1/2">
                        <img class="w-full" src="https://nou-bakery.myshopify.com/cdn/shop/files/counter-555x431_grande.png?v=1613698764" />
                    </div>
                    <div class="w-1/2 flex flex-col justify-center items-center gap-5">
                        <div class="flex flex-col text-center"> 
                             <span class=" font-bold text-[#ee7560;] text-[25px]" >Hot Deal Today</span>
                             <span class="text-[25px] hover:text-red-500" >Vanilla cupcake with red sugar flowers</span>
                        </div>
                        <div class=" w-full flex flex-col items-center">
                            <div><span class="text-[26px]">ONLY: <span class="text-[50px] text-[#4e3939cc;]"> $16.00</span></span></div>
                            <div class="flex gap-5 ">
                                    <div class="flex flex-col  items-center text-[#4e3939cc;]">
                                        <span class="text-[60px] font-bold">02</span>
                                        <span class=" uppercase">hours</span>
                                    </div>
                                    <div class="text-[#4e3939cc;] font-bold text-[40px] mt-5"> <span>:</span></div>
                                    <div class="flex flex-col  items-center text-[#4e3939cc;]">
                                        <span class="text-[60px] font-bold">06</span>
                                        <span class=" uppercase">mins</span>
                                    </div>
                                    <div class="text-[#4e3939cc;] font-bold text-[40px] mt-5"> <span>:</span></div>
                                    <div class="flex flex-col  items-center text-[#4e3939cc;]">
                                        <span class="text-[60px] font-bold">30</span>
                                        <span class=" uppercase">seconds</span>
                                    </div>
                            </div>
                        </div>
                        <div class="mt-6">
                            <button class=" uppercase rounded-full text-white bg-gradient-to-r from-[#ee7560] to-[#ff5858] text-[14px] py-3 px-10"><span class="mr-2">order now </span> <i class=" fa fa-angle-right" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
             <div class="container">
                <div class="flex flex-col justify-center items-center">
                     <div><span class="text-[#ee7560;] text-[20px] font-bold">Sweet Cupcakes</span></div>
                     <div class="flex gap-5 items-center justify-center">
                            <div class="w-[90px] h-[20px] bg-[#e9e9e9;]"></div>
                            <div class="uppercase text-[35px]">best seller</div>
                            <div class="w-[90px] h-[20px] bg-[#e9e9e9;]"></div>
                     </div>
                </div>
                <div class="flex gap-8 my-[50px]">
                    <div class="w-1/4">
                        <div class="relative group/item">
                            <img src="https://nou-bakery.myshopify.com/cdn/shop/products/img-cake-3_grande.jpg?v=1524321725"  class="w-full" />
                            <div class=" invisible group-hover/item:visible text-white absolute top-[0px] left-[0px] w-full h-full flex justify-center items-center gap-4">
                                <div class=" bg-black rounded-full w-[45px] h-[45px] flex items-center justify-center" ><i class="fa fa-heart" aria-hidden="true"></i></div>
                                <div class=" bg-black rounded-full w-[45px] h-[45px] flex items-center justify-center"><i class="fa fa-search" aria-hidden="true"></i></div>
                                <div class=" bg-black rounded-full w-[45px] h-[45px] flex items-center justify-center"><i class="fa fa-shopping-cart" aria-hidden="true"></i></div>
                            </div>
                            <div class=" absolute top-[0px] left-[0px] rotate-[-17deg] flex justify-center items-center bg-contain h-[65px] w-[65px] text-white bg-[url('https://nou-bakery.myshopify.com/cdn/shop/t/7/assets/badge-2.png?v=147666975709106470991695832898')]">
                                -20%
                            </div>
                            <div class=" absolute top-[0px] right-[0px] rotate-[-17deg] flex justify-center items-center bg-contain h-[65px] w-[65px] text-white bg-[url('https://nou-bakery.myshopify.com/cdn/shop/t/7/assets/badge-1.png?v=132605518465251901091695832898')]">
                                New
                            </div>
                        </div>
                        <a href="">
                        <div class="flex flex-col items-center gap-2 mt-10">
                            <div class="text-[18px]" >Sweet Cakes</div>
                            <div class="text-[#4e3939;] uppercase text-[11px]">Cake - donut - sweet</div>
                            <div class="text-[15px] flex text-[#edb867;]">
                                 <i class="fa fa-star" aria-hidden="true"></i>
                                 <i class="fa fa-star" aria-hidden="true"></i>
                                 <i class="fa fa-star" aria-hidden="true"></i>
                                 <i class="fa fa-star" aria-hidden="true"></i>
                                 <i class="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div class="flex text-[17px] items-end gap-1" >
                                <span class="text-[#777;] text-[14px]">$50.00</span>
                                <span>$16.00</span>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div class="w-1/4">
                        <div class="relative group/item">
                            <img src="https://nou-bakery.myshopify.com/cdn/shop/products/img-cake-14_grande.jpg?v=15243219055"  class="w-full" />
                            <div class=" invisible group-hover/item:visible text-white absolute top-[0px] left-[0px] w-full h-full flex justify-center items-center gap-4">
                                <div class=" bg-black rounded-full w-[45px] h-[45px] flex items-center justify-center" ><i class="fa fa-heart" aria-hidden="true"></i></div>
                                <div class=" bg-black rounded-full w-[45px] h-[45px] flex items-center justify-center"><i class="fa fa-search" aria-hidden="true"></i></div>
                                <div class=" bg-black rounded-full w-[45px] h-[45px] flex items-center justify-center"><i class="fa fa-shopping-cart" aria-hidden="true"></i></div>
                            </div>
                        </div>
                        <a href="">
                        <div class="flex flex-col items-center gap-2 mt-10">
                            <div class="text-[18px]" >Sweet Cakes</div>
                            <div class="text-[#4e3939;] uppercase text-[11px]">Cake - donut - sweet</div>
                            <div class="text-[15px] flex text-[#edb867;]">
                                 <i class="fa fa-star" aria-hidden="true"></i>
                                 <i class="fa fa-star" aria-hidden="true"></i>
                                 <i class="fa fa-star" aria-hidden="true"></i>
                                 <i class="fa fa-star" aria-hidden="true"></i>
                                 <i class="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div class="flex text-[17px] items-end gap-1" >
                                <span class="text-[#777;] text-[14px]">$50.00</span>
                                <span>$16.00</span>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div class="w-1/4">
                        <div class="relative group/item">
                            <img src="https://nou-bakery.myshopify.com/cdn/shop/products/img-cake-5_d92acd9c-cdf1-42b8-a663-828f648d7226_grande.jpg?v=1524321790"  class="w-full" />
                            <div class=" invisible group-hover/item:visible text-white absolute top-[0px] left-[0px] w-full h-full flex justify-center items-center gap-4">
                                <div class=" bg-black rounded-full w-[45px] h-[45px] flex items-center justify-center" ><i class="fa fa-heart" aria-hidden="true"></i></div>
                                <div class=" bg-black rounded-full w-[45px] h-[45px] flex items-center justify-center"><i class="fa fa-search" aria-hidden="true"></i></div>
                                <div class=" bg-black rounded-full w-[45px] h-[45px] flex items-center justify-center"><i class="fa fa-shopping-cart" aria-hidden="true"></i></div>
                            </div>
                        </div>
                        <a href="">
                        <div class="flex flex-col items-center gap-2 mt-10">
                            <div class="text-[18px]" >Sweet Cakes</div>
                            <div class="text-[#4e3939;] uppercase text-[11px]">Cake - donut - sweet</div>
                            <div class="text-[15px] flex text-[#edb867;]">
                                 <i class="fa fa-star" aria-hidden="true"></i>
                                 <i class="fa fa-star" aria-hidden="true"></i>
                                 <i class="fa fa-star" aria-hidden="true"></i>
                                 <i class="fa fa-star" aria-hidden="true"></i>
                                 <i class="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div class="flex text-[17px] items-end gap-1" >
                                <span class="text-[#777;] text-[14px]">$50.00</span>
                                <span>$16.00</span>
                            </div>
                        </div>
                        </a>
                    </div>
                    <div class="w-1/4">
                        <div class="relative group/item">
                            <img src="https://nou-bakery.myshopify.com/cdn/shop/products/img-cake-13_300x300_crop_center.jpg?v=1524321891"  class="w-full" />
                            <div class=" invisible group-hover/item:visible text-white absolute top-[0px] left-[0px] w-full h-full flex justify-center items-center gap-4">
                                <div class=" bg-black rounded-full w-[45px] h-[45px] flex items-center justify-center" ><i class="fa fa-heart" aria-hidden="true"></i></div>
                                <div class=" bg-black rounded-full w-[45px] h-[45px] flex items-center justify-center"><i class="fa fa-search" aria-hidden="true"></i></div>
                                <div class=" bg-black rounded-full w-[45px] h-[45px] flex items-center justify-center"><i class="fa fa-shopping-cart" aria-hidden="true"></i></div>
                            </div>
                        </div>
                        <a href="">
                        <div class="flex flex-col items-center gap-2 mt-10">
                            <div class="text-[18px]" >Sweet Cakes</div>
                            <div class="text-[#4e3939;] uppercase text-[11px]">Cake - donut - sweet</div>
                            <div class="text-[15px] flex text-[#edb867;]">
                                 <i class="fa fa-star" aria-hidden="true"></i>
                                 <i class="fa fa-star" aria-hidden="true"></i>
                                 <i class="fa fa-star" aria-hidden="true"></i>
                                 <i class="fa fa-star" aria-hidden="true"></i>
                                 <i class="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div class="flex text-[17px] items-end gap-1" >
                                <span class="text-[#777;] text-[14px]">$50.00</span>
                                <span>$16.00</span>
                            </div>
                        </div>
                        </a>
                    </div>
                </div>
             </div>
        </section>
        <section style="background-image: url(https://nou-bakery.myshopify.com/cdn/shop/files/img-bg-1.jpg?v=1613698649)" class="bg-fixed  py-[90px]">
            <div class="owl-carousel owl-theme owl-carousel-nav">
                <div class="item">
                        <div class="flex flex-col items-center justify-center gap-4">
                        <div> <img class=" rounded-full w-[150px] h-[150px] border-2 border-white" src="https://nou-bakery.myshopify.com/cdn/shop/files/4_152x152_crop_center.jpg?v=1613698649" /></div>
                        <div class="text-[15px] flex text-[#edb867;]">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <div class="text-[#3c3c3c;]"> Jane - Manager</div>
                        <div class="w-[50%] text-center"><span class="text-[22px] text-[#3c3c3c;]" >Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweet muffin pudding tart bear claw sugar plum croissant.</span></div>
                    </div>
                </div>
                            <div class="item">
                            <div class="flex flex-col items-center justify-center gap-4">
                            <div> <img class=" rounded-full w-[150px] h-[150px] border-2 border-white" src="https://nou-bakery.myshopify.com/cdn/shop/files/1_152x152_crop_center.jpg?v=1613698649" /></div>
                            <div class="text-[15px] flex text-[#edb867;]">
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                                <i class="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <div class="text-[#3c3c3c;]"> Jane - Manager</div>
                            <div class="w-[50%] text-center"><span class="text-[22px] text-[#3c3c3c;]" >Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweet muffin pudding tart bear claw sugar plum croissant.</span></div>
                        </div>
                    </div>
                    <div class="item">
                    <div class="flex flex-col items-center justify-center gap-4">
                    <div> <img class=" rounded-full w-[150px] h-[150px] border-2 border-white" src="https://nou-bakery.myshopify.com/cdn/shop/files/2_152x152_crop_center.jpg?v=1613698649" /></div>
                    <div class="text-[15px] flex text-[#edb867;]">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div class="text-[#3c3c3c;]"> Jane - Manager</div>
                    <div class="w-[50%] text-center"><span class="text-[22px] text-[#3c3c3c;]" >Dessert pudding dessert jelly beans cupcake sweet caramels gingerbread. Fruitcake biscuit cheesecake. Cookie topping sweet muffin pudding tart bear claw sugar plum croissant.</span></div>
                </div>
            </div>
            </div>
        </section>
        <section class="py-[100px]">
            <div class="container">
                <div class="flex flex-col justify-center items-center ">
                        <div><span class="text-[#ee7560;] text-[20px] font-bold">Making people happy</span></div>
                        <div class="flex gap-5 items-center justify-center">
                            <div class="w-[90px] h-[20px] bg-[#e9e9e9;]"></div>
                            <div class="uppercase text-[35px]">offer this week</div>
                            <div class="w-[90px] h-[20px] bg-[#e9e9e9;]"></div>
                        </div>   
                </div>
                <div class="grid grid-cols-4 gap-7 grid-rows-2 py-[50px]">
                    <div class="col-span-2 row-span-2">
                            <img class=" h-full w-full" src="https://nou-bakery.myshopify.com/cdn/shop/files/banner-1.jpg?v=1613698642" />
                    </div>
                    <div ><img class=" h-full w-full" src="https://nou-bakery.myshopify.com/cdn/shop/files/banner-2.jpg?v=1613698642"/></div>
                    <div ><img class=" h-full w-full" src="https://nou-bakery.myshopify.com/cdn/shop/files/banner-3.jpg?v=1613698642" /></div>
                    <div class="  col-span-2"><img class=" h-full w-full" src="https://nou-bakery.myshopify.com/cdn/shop/files/banner-4.jpg?v=1613698642" /></div>
                </div>
            </div>
        </section>
        <section class="pb-[110px]">
            <div class="container">
                 <div class="flex gap-9">
                    <div class="w-1/2 flex flex-col gap-6">
                        <div class="flex gap-4 items-center"> 
                            <div class=" uppercase  text-[40px]">hot cake</div>
                            <div class="bg-[#e9e9e9;] w-[100px] h-[20px]"></div>
                        </div>
                        <div class="flex gap-7 items-center">
                            <div class=" w-[200px]">
                                <img class="w-full" src="https://nou-bakery.myshopify.com/cdn/shop/products/img-cake-16_87d891e0-6d2a-4efc-8c4b-5579a389270a_300x300_crop_center.jpg?v=1524321961" />
                            </div>
                            <div class=" grow flex flex-col gap-2">
                                <div class=" uppercase text-[17px] font-bold"> frozen creamy</div>
                                <div><span class="text-[#4e3939;] text-[14px]">Lollipop dessert donut marzipan cookie bonbon sesame snaps chocolate. Cupcake...</span></div>
                                <div class="flex gap-1 items-center">
                                  <span class="text-[#777;] text-[15px]">44.00$</span>
                                  <span class="text-[#4e3939;] text-[20px]">36.00$</span>
                                </div>
                                <div>
                                <button class=" uppercase rounded-full text-white bg-gradient-to-r from-[#ee7560] to-[#ff5858] text-[14px] py-2 px-5"><span class="mr-2">add to cart </span> <i class=" fa fa-angle-right" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-7 items-center">
                            <div class=" w-[200px]">
                                <img class="w-full" src="https://nou-bakery.myshopify.com/cdn/shop/products/img-cake-16_87d891e0-6d2a-4efc-8c4b-5579a389270a_300x300_crop_center.jpg?v=1524321961" />
                            </div>
                            <div class=" grow flex flex-col gap-2">
                                <div class=" uppercase text-[17px] font-bold"> frozen creamy</div>
                                <div><span class="text-[#4e3939;] text-[14px]">Lollipop dessert donut marzipan cookie bonbon sesame snaps chocolate. Cupcake...</span></div>
                                <div class="flex gap-1 items-center">
                                  <span class="text-[#777;] text-[15px]">44.00$</span>
                                  <span class="text-[#4e3939;] text-[20px]">36.00$</span>
                                </div>
                                <div>
                                <button class=" uppercase rounded-full text-white bg-gradient-to-r from-[#ee7560] to-[#ff5858] text-[14px] py-2 px-5"><span class="mr-2">add to cart </span> <i class=" fa fa-angle-right" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-7 items-center">
                            <div class=" w-[200px]">
                                <img class="w-full" src="https://nou-bakery.myshopify.com/cdn/shop/products/img-cake-16_87d891e0-6d2a-4efc-8c4b-5579a389270a_300x300_crop_center.jpg?v=1524321961" />
                            </div>
                            <div class=" grow flex flex-col gap-2">
                                <div class=" uppercase text-[17px] font-bold"> frozen creamy</div>
                                <div><span class="text-[#4e3939;] text-[14px]">Lollipop dessert donut marzipan cookie bonbon sesame snaps chocolate. Cupcake...</span></div>
                                <div class="flex gap-1 items-center">
                                  <span class="text-[#777;] text-[15px]">44.00$</span>
                                  <span class="text-[#4e3939;] text-[20px]">36.00$</span>
                                </div>
                                <div>
                                <button class=" uppercase rounded-full text-white bg-gradient-to-r from-[#ee7560] to-[#ff5858] text-[14px] py-2 px-5"><span class="mr-2">add to cart </span> <i class=" fa fa-angle-right" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2 flex flex-col gap-6">
                        <div class="flex gap-4 items-center"> 
                            <div class=" uppercase  text-[40px]">new cake</div>
                            <div class="bg-[#e9e9e9;] w-[100px] h-[20px]"></div>
                        </div>
                        <div class="flex gap-7 items-center">
                            <div class=" w-[200px]">
                                <img class="w-full" src="https://nou-bakery.myshopify.com/cdn/shop/products/img-cake-16_87d891e0-6d2a-4efc-8c4b-5579a389270a_300x300_crop_center.jpg?v=1524321961" />
                            </div>
                            <div class=" grow flex flex-col gap-2">
                                <div class=" uppercase text-[17px] font-bold"> frozen creamy</div>
                                <div><span class="text-[#4e3939;] text-[14px]">Lollipop dessert donut marzipan cookie bonbon sesame snaps chocolate. Cupcake...</span></div>
                                <div class="flex gap-1 items-center">
                                  <span class="text-[#777;] text-[15px]">44.00$</span>
                                  <span class="text-[#4e3939;] text-[20px]">36.00$</span>
                                </div>
                                <div>
                                <button class=" uppercase rounded-full text-white bg-gradient-to-r from-[#ee7560] to-[#ff5858] text-[14px] py-2 px-5"><span class="mr-2">add to cart </span> <i class=" fa fa-angle-right" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-7 items-center">
                            <div class=" w-[200px]">
                                <img class="w-full" src="https://nou-bakery.myshopify.com/cdn/shop/products/img-cake-16_87d891e0-6d2a-4efc-8c4b-5579a389270a_300x300_crop_center.jpg?v=1524321961" />
                            </div>
                            <div class=" grow flex flex-col gap-2">
                                <div class=" uppercase text-[17px] font-bold"> frozen creamy</div>
                                <div><span class="text-[#4e3939;] text-[14px]">Lollipop dessert donut marzipan cookie bonbon sesame snaps chocolate. Cupcake...</span></div>
                                <div class="flex gap-1 items-center">
                                  <span class="text-[#777;] text-[15px]">44.00$</span>
                                  <span class="text-[#4e3939;] text-[20px]">36.00$</span>
                                </div>
                                <div>
                                <button class=" uppercase rounded-full text-white bg-gradient-to-r from-[#ee7560] to-[#ff5858] text-[14px] py-2 px-5"><span class="mr-2">add to cart </span> <i class=" fa fa-angle-right" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-7 items-center">
                            <div class=" w-[200px]">
                                <img class="w-full" src="https://nou-bakery.myshopify.com/cdn/shop/products/img-cake-16_87d891e0-6d2a-4efc-8c4b-5579a389270a_300x300_crop_center.jpg?v=1524321961" />
                            </div>
                            <div class=" grow flex flex-col gap-2">
                                <div class=" uppercase text-[17px] font-bold"> frozen creamy</div>
                                <div><span class="text-[#4e3939;] text-[14px]">Lollipop dessert donut marzipan cookie bonbon sesame snaps chocolate. Cupcake...</span></div>
                                <div class="flex gap-1 items-center">
                                  <span class="text-[#777;] text-[15px]">44.00$</span>
                                  <span class="text-[#4e3939;] text-[20px]">36.00$</span>
                                </div>
                                <div>
                                <button class=" uppercase rounded-full text-white bg-gradient-to-r from-[#ee7560] to-[#ff5858] text-[14px] py-2 px-5"><span class="mr-2">add to cart </span> <i class=" fa fa-angle-right" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </section>
        <section class="py-[80px] bg-[#f5f3f0] bg-[url('https://nou-bakery.myshopify.com/cdn/shop/files/pattern-2_grande.png?v=1613698641')] bg-repeat">
           <div class="container">
                <div class="flex gap-8">
                    <div class=" w-1/3 flex flex-col gap-3">
                        <div>
                            <div class="flex gap-4 items-center"> 
                                <div class=" uppercase  text-[40px]">our baker</div>
                                <div class="bg-[#e9e9e9;] w-[100px] h-[20px]"></div>
                            </div>
                        </div>
                        <div class="text-[14px] mt-4" >
                            <span>We all have those moments in our lives when we feel as if everything needs to be exactly rigt.</span>
                        </div>
                        <div class="text-[14px]">
                            <span>Dessert tiramisu tart donut macaroon. Gummi bears lollipop marzipan. Caramels gummi bears icing jelly beans cheesecake brownie topping candy sugaplum.</span>
                        </div>
                        <div class="text-[14px]">
                            <ul class="list-disc relative left-[18px]">
                                <li class="py-3">Caramels gummi bears</li>
                                <li class="py-3">Caramels gummi bears</li>
                                <li class="py-3">Caramels gummi bears</li>
                            </ul>
                        </div>
                        <div>
                        <button class=" uppercase rounded-full text-white bg-gradient-to-r from-[#ee7560] to-[#ff5858] text-[14px] py-3 px-10"><span class="mr-2">read more </span> <i class=" fa fa-angle-right" aria-hidden="true"></i></button>
                        </div>
                    </div>
                    <div class=" w-1/3 bg-white pb-11">
                        <div >
                            <img src="https://nou-bakery.myshopify.com/cdn/shop/files/team-1_grande.jpg?v=1613698641" />
                        </div>
                        <div class="flex flex-col gap-4 items-center px-9 py-6">
                            <div><span class=" uppercase text-[19px]">christian gregory</span></div>
                            <div class="flex flex-col gap-1 items-center text-[13px]">
                                <span class="text-[#ee7560;]">CEO - Founder</span>
                                <span class=" text-center" >Jelly topping halvah caramels sweet cake gummi bears toffee.</span>
                            </div>
                            <div class="flex gap-8 text-[18px]">
                                  <i class="fa fa-facebook" aria-hidden="true"></i>
                                  <i class="fa fa-google" aria-hidden="true"></i>
                                  <i class="fa fa-twitter" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div class=" w-1/3 bg-white pb-11">
                        <div >
                            <img src="https://nou-bakery.myshopify.com/cdn/shop/files/team-2_grande.jpg?v=1613698641" />
                        </div>
                        <div class="flex flex-col gap-4 items-center px-9 py-6">
                            <div><span class=" uppercase text-[19px]">christian gregory</span></div>
                            <div class="flex flex-col gap-1 items-center text-[13px]">
                                <span class="text-[#ee7560;]">CEO - Founder</span>
                                <span class=" text-center" >Jelly topping halvah caramels sweet cake gummi bears toffee.</span>
                            </div>
                            <div class="flex gap-8 text-[18px]">
                                  <i class="fa fa-facebook" aria-hidden="true"></i>
                                  <i class="fa fa-google" aria-hidden="true"></i>
                                  <i class="fa fa-twitter" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </section>
        <section class="py-[100px]">
            <div class="container">
                <div class="flex flex-col justify-center items-center ">
                        <div><span class="text-[#ee7560;] text-[20px] font-bold">Sub title</span></div>
                        <div class="flex gap-5 items-center justify-center">
                            <div class="w-[90px] h-[20px] bg-[#e9e9e9;]"></div>
                            <div class="uppercase text-[35px]">lastest blog</div>
                            <div class="w-[90px] h-[20px] bg-[#e9e9e9;]"></div>
                        </div>   
                </div>
                <div class="grid grid-cols-2  grid-rows-2 gap-6 py-[50px]" >
                    <div class="  bg-no-repeat bg-cover bg-[url('https://nou-bakery.myshopify.com/cdn/shop/articles/img-blog-3_c6f0c1b7-22a3-491a-950d-9af6a79bf66f_555x500_crop_center.jpg?v=1526090359')] row-span-2 w-full h-full">
                        <div class="py-5 px-8 w-full h-full bg-[rgba(41,32,60,.75);] text-white">
                            <div class="text-[16px]" ><span>by <span class="text-[#ee7560;]" >nou themes</span> / Apr/21/2018</span></div>
                            <div class="flex flex-col gap-5 py-[100px]" >
                                <div class="text-[35px]" >
                                    <span>Micenas Placerat Nibh Loreming Fentum</span>
                                </div>
                                <div class="text-[13px]" > <span>No matter how far along you are in your sophistication as an amateur astronomer, there...</span></div>
                                <div class="mt-5" ><button class=" uppercase rounded-full text-white bg-gradient-to-r from-[#ee7560] to-[#ff5858] text-[14px] py-2 px-5"><span class="mr-2">read more </span> <i class=" fa fa-angle-right" aria-hidden="true"></i></button></div>
                            </div>
                            
                        </div>
                    </div>
                    <div class="  w-full h-full">
                        <div class="  bg-no-repeat bg-cover bg-[url('https://nou-bakery.myshopify.com/cdn/shop/articles/img-blog-1_21daa39c-3716-4e1e-a611-551cd139c4ba_555x235_crop_center.jpg?v=1526090339')] row-span-2 w-full h-full">
                        <div class=" px-8 w-full h-full bg-[rgba(41,32,60,.75);] text-white justify-center flex flex-col gap-9 ">
                            <div class="text-[16px]" ><span>by <span class="text-[#ee7560;]" >nou themes</span> / Apr/21/2018</span></div>
                            <div class="flex flex-col gap-2 " >
                                <div class="text-[20px]" >
                                    <span>Micenas Placerat Nibh Loreming Fentum</span>
                                </div>
                                <div class="text-[13px]" > <span>No matter how far along you are in your sophistication as an amateur astronomer, there...</span></div>
                                <div class="mt-3" ><button class=" uppercase rounded-full text-white bg-gradient-to-r from-[#ee7560] to-[#ff5858] text-[14px] py-2 px-5"><span class="mr-2">read more </span> <i class=" fa fa-angle-right" aria-hidden="true"></i></button></div>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                    <div class="  w-full h-full">
                        <div class="  bg-no-repeat bg-cover bg-[url('https://nou-bakery.myshopify.com/cdn/shop/articles/img-blog-2_eaceadef-90a3-41f3-a141-58dbbbe6f6b8_555x235_crop_center.jpg?v=1526090367')] row-span-2 w-full h-full">
                        <div class=" px-8 w-full h-full bg-[rgba(41,32,60,.75);] text-white justify-center flex flex-col gap-9 ">
                            <div class="text-[16px]" ><span>by <span class="text-[#ee7560;]" >nou themes</span> / Apr/21/2018</span></div>
                            <div class="flex flex-col gap-2 " >
                                <div class="text-[20px]" >
                                    <span>Micenas Placerat Nibh Loreming Fentum</span>
                                </div>
                                <div class="text-[13px]" > <span>No matter how far along you are in your sophistication as an amateur astronomer, there...</span></div>
                                <div class="mt-3" ><button class=" uppercase rounded-full text-white bg-gradient-to-r from-[#ee7560] to-[#ff5858] text-[14px] py-2 px-5"><span class="mr-2">read more </span> <i class=" fa fa-angle-right" aria-hidden="true"></i></button></div>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-[#f5f3f0;]">
            <div class="container">
                <div class="agency-sponsor-carousel owl-theme owl-carousel">
                    <div class="item"><img  src="https://nou-bakery.myshopify.com/cdn/shop/files/1.png?v=1613698433" /> </div>
                    <div class="item"><img  src="https://nou-bakery.myshopify.com/cdn/shop/files/8.png?v=1613698433" /> </div>
                    <div class="item"><img  src="https://nou-bakery.myshopify.com/cdn/shop/files/2.png?v=1613698433" /> </div>
                    <div class="item"><img  src="https://nou-bakery.myshopify.com/cdn/shop/files/3.png?v=1613698433" /> </div>
                    <div class="item"><img  src="https://nou-bakery.myshopify.com/cdn/shop/files/4.png?v=1613698433" /> </div>
                    <div class="item"><img  src="https://nou-bakery.myshopify.com/cdn/shop/files/6.png?v=1613698433" /> </div>
                </div>
            </div>
        </section>
    `);
}

//