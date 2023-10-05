import { v4 as uuidv4 } from 'uuid';
import commentService from '../service/commentService';
export default async function Comment(dataItem){
    const dataComments = await commentService.getByProduct({product_id : dataItem.id, _sort : 'createdAt', _order :  'asc'});
    window.submitComment = () => {
        
        var currentdate = new Date(); 
        var datetime = currentdate.getFullYear() + "-"
                + (currentdate.getMonth()+1)  + "-" 
                + currentdate.getDate() + " "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
        let name = $('#name-comment').val();
        let content = $('#content-comment').val();
        let email = $('#email-comment').val();
        let createdAt = datetime;

        let dataComment = {
           id : uuidv4(),
           name,
           content,
           email,
           createdAt,
           product_id : dataItem.id
        }
        commentService.create(dataComment)
        .then((dataComment) => {
            $('#name-comment, #content-comment, #email-comment').val("");
               $('.show-comments').prepend(`<div class="py-10 flex justify-between border-b-[1px] border-[#eeeeee]">
                <div class="flex gap-5 items-center">
                    <div class=""><img src="https://secure.gravatar.com/avatar/a3c4d88c6648438f6ab44c0f13260353?s=83&d=mm&r=g" alt="" class="rounded-full"></div>
                    <div class="h-full flex flex-col justify-between ">
                        <div class="uppercase flex flex-col ">
                            <span class="text-[18px] font-bold">${dataComment.name}</span>
                            <span class="text-[#ee7560;] italic text-[12px]">${dataComment.createdAt}</span>
                        </div>
                        <div class="text-[14px] text-[#666666;]">
                            ${dataComment.content}
                        </div>
                    </div>
                </div>
                <div class="flex  items-center text-[#edb867;] text-[12px]">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
            </div>`);
            $([document.documentElement, document.body]).animate({
                  scrollTop: $(".show-comments").offset().top
            }, 600);
        })
    }
  return (`
  
        <div id="tab-comments" class="hidden mt-9  w-full">
        <div class="">
            <h1 class="text-[19px] uppercase font-bold show-total-comments">${dataComments.length} reviews for ${dataItem.name}</h1>
        </div>

        <div class="flex flex-col show-comments">
            ${dataComments.map((item, key) => (
                `<div class="py-10 flex justify-between border-b-[1px] border-[#eeeeee]">
                <div class="flex gap-5 items-center">
                    <div class=""><img src="https://secure.gravatar.com/avatar/a3c4d88c6648438f6ab44c0f13260353?s=83&d=mm&r=g" alt="" class="rounded-full"></div>
                    <div class="h-full flex flex-col justify-between ">
                        <div class="uppercase flex flex-col ">
                            <span class="text-[18px] font-bold">${item.name}</span>
                            <span class="text-[#ee7560;] italic text-[12px]">${item.createdAt}</span>
                        </div>
                        <div class="text-[14px] text-[#666666;]">
                            ${item.content}
                        </div>
                    </div>
                </div>
                <div class="flex  items-center text-[#edb867;] text-[12px]">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
            </div>`
            ))}
        </div>

        <div class="flex flex-col text-[15.3px] mt-[50px]">
            <div class="text-[#666;] ">Add a review</div>
            <div class="text-[#666;]">Your email address will not be published. Required fields are marked * </div>
            <div class="flex flex-row gap-5 mt-[25px]">
                <div class="italic text-[#ff5858]">
                    Your Rating
                </div>
                <div class=" text-[#666;] text-[12px] flex gap-2 items-center">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4 mt-5">
            <div class="">
                <input id="name-comment" type="text" class="italic py-3 px-4 bg-[#f6f4ef] text-[#666666;] w-full" placeholder="Your name *">
            </div>
            <div class="">
                <input id="email-comment" type="email" class="italic py-3 px-4 bg-[#f6f4ef] text-[#666666;] w-full" placeholder="email *">
            </div>
            <div class="col-span-2">
                <textarea id="content-comment" class="italic py-3 px-4 bg-[#f6f4ef] text-[#666666;] w-full" name="" id="" cols="45" rows="8" placeholder="Your Review"></textarea>
            </div>
        </div>

        <div class="flex flex-col gap-6 mt-6">
            <div class="flex gap-2 items-center">
                <input type="checkbox" class="">
                <label class="text-[#666;] text-[15.3px]" for="">Save my name, email, and website in this browser for the next time I comment.</label>
            </div>
            <div class="">
                <button onclick="submitComment();" class="submit-comment px-10 py-4 text-white cursor-pointer font-bold text-[15px] uppercase bg-[#ff5858]"> submit</button>
            </div>
        </div>
        </div>
  `);
}