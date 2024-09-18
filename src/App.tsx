import React, { useEffect, useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import img1 from './assets/1b5a348c4fede9b3b0fc.jpg'

function App() {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    var navbar = document.getElementById('nav-menu')
    var sticky = navbar!.offsetTop

    // Hàm cố định navbar khi cuộn qua
    function stickyNavbar() {
      if (window.pageYOffset >= sticky) {
        navbar!.classList.add('fixed')
        navbar!.classList.add('top-0')
      } else {
        navbar!.classList.remove('fixed')
        navbar!.classList.remove('top-0')
      }
    }
    window.addEventListener('scroll', stickyNavbar)
  }, [])

  // Hàm xử lý khi click icon
  const handleClick = () => {
    setOpen(!open) // Thay đổi trạng thái icon
  }

  return (
    <div className="font-rukkit scroll-smooth">
      <header className="">
        <div className="fixed lg:relative w-full justify-between h-[60px] lg:h-[100px] bg-primaryTo flex items-center px-5 lg:justify-center">
          <a href="#" className="text-[20px]  lg:text-[40px] text-textColor">
            Phanxico Assisi
          </a>
          <FontAwesomeIcon
            icon={open ? faClose : faBars}
            onClick={handleClick}
            size="3x"
            className={`lg:hidden text-[26px] lg:text-[40px] transition duration-500 ease-in-out transform text-textColor
            `}
          />
        </div>
        <ul
          className={`${
            open ? 'flex' : 'hidden'
          } flex-col fixed justify-start items-start text-[16px] font-thin w-full bg-white z-1 top-[60px] bottom-0 left-0 right-0`}
          id="mobile-nav-menu">
          <li className="pl-5 py-4" onClick={() => setOpen(false)}>
            <a href="#info" className="hover:text-primaryTo">
              Thông tin
            </a>
          </li>
          <span className="h-[1px] w-full bg-black"></span>
          <li className="pl-5 py-4" onClick={() => setOpen(false)}>
            <a href="#history" className="hover:text-primaryTo">
              Lịch sử hình thành
            </a>
          </li>
          <span className="h-[1px] w-full bg-black"></span>
          <li className="pl-5 py-4" onClick={() => setOpen(false)}>
            <a href="#thankyou" className="hover:text-primaryTo">
              Lời cảm ơn
            </a>
          </li>
          <span className="h-[1px] w-full bg-black"></span>

          <li className="pl-5 py-4" onClick={() => setOpen(false)}>
            <a href="#events" className="hover:text-primaryTo">
              Sự kiện
            </a>
          </li>
          <span className="h-[1px] w-full bg-black"></span>
        </ul>
        <ul
          className=" lg:flex gap-20 justify-center shadow-custom h-20 items-center text-[16px] lg:text-[20px] font-thin w-full bg-white z-1 hidden "
          id="nav-menu">
          <a href="#info" className="hover:text-primaryTo">
            <li>Thông tin</li>
          </a>
          <a href="#history" className="hover:text-primaryTo">
            <li>Lịch sử hình thành</li>
          </a>
          <a href="#thankyou" className="hover:text-primaryTo">
            <li>Lời cảm ơn</li>
          </a>
          <a href="#events" className="hover:text-primaryTo">
            <li>Sự kiện</li>
          </a>
        </ul>
      </header>
      <main id="main" className="pt-[60px] lg:pt-0">
        <div className="" id="info">
          <div className="h-[200px]  bg-[url('https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/458724548_896140762562558_8772826068921100115_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE5yABzfpA0JW68agEPcSQ3p700pTFcK5unvTSlMVwrm5r-wW3hX8X0qSexVkUPT4Ic4L2s4yqKIGz1WbFoxvWx&_nc_ohc=nm5Z9tqsPnQQ7kNvgGZjMmQ&_nc_ht=scontent.fhan2-3.fna&_nc_gid=Ap6NgmaH52vvL4wRqjzt_HT&oh=00_AYBVvmOS2QstZmwO2OexqB9GorHZ8AlpL6p9yLe5OoaU8w&oe=66EF5F55')] bg-cover w-full lg:h-[1000px]  bg-no-repeat bg-center object-cover">
            <div className="bg-[rgba(0,0,0,0.5)] text-textColor h-full w-full flex justify-center flex-col items-center text-[20px] lg:text-[40px]">
              <p className="">Xứ đoàn TNTT Phanxico Assisi</p>
              <span className=""></span>
              <span className="">Mừng 10 năm sinh nhật xứ đoàn</span>
              <span className=""></span>
              <p className="">Ngày kỉ niệm</p>
              <p className="bg-primaryTo px-10 ">17/08/2014-17/08/2024</p>
            </div>
          </div>
          <div className="flex justify-center items-center h-[100px] lg:h-[400px] bg-primaryTo">
            <span className="text-[15px] lg:text-[26px] text-textColor text-center">
              We are so excited to celebrate our special day with our family and friends. Thank you so much for visiting
              our wedding website!
            </span>
          </div>
        </div>
        <div className="pt-5 lg:pt-[100px]" id="history">
          <span className="h-[100px] flex justify-center items-center text-[30px]">Lịch sử hình thành</span>
          <ul className="flex flex-col gap-10 px-5 lg:px-20">
            <li className="lg:h-[200px] w-full">
              <div className="bg-primary w-full lg:w-2/3 h-full rounded-xl shadow-xl border-[1px] border-solid border-black overflow-hidden flex flex-col lg:flex-row">
                <img src={img1} alt="" className="w-full h-auto lg:h-full lg:w-auto object-cover" />
                <div className="py-10 flex flex-col items-center px-5">
                  <p className="text-[20px] font-bold">Thủa ban đầu còn rất đơn sơ</p>
                  <p className="text-justify">
                    Xứ đoàn TNTT ban đầu gồm 174 thành viên thuộc các ngành Ấu Nhi,Thiếu Nhi ,Nghĩa Sĩ và Dự Trưởng
                  </p>
                </div>
              </div>
            </li>
            <li className="lg:h-[200px] w-full ">
              <div className="bg-primary overflow-hidden mr-0 ml-auto lg:w-2/3 h-full  rounded-xl shadow-xl border-[1px] border-solid border-black flex flex-col lg:flex-row">
                <img src={img1} alt="" className="w-full h-auto lg:h-full lg:w-auto object-cover" />

                <div className="py-10 flex flex-col items-center px-5">
                  <p className="text-[20px] font-bold">Thủa ban đầu còn rất đơn sơ</p>
                  <p className="text-justify">
                    Xứ đoàn TNTT ban đầu gồm 174 thành viên thuộc các ngành Ấu Nhi,Thiếu Nhi ,Nghĩa Sĩ và Dự Trưởng
                  </p>
                </div>
              </div>
            </li>
            <li className="lg:h-[200px] w-full  ">
              <div className="bg-primary overflow-hidden left-0 lg:w-2/3 h-full  rounded-xl shadow-xl border-[1px] border-solid border-black  flex flex-col lg:flex-row">
                <img src={img1} alt="" className="w-full h-auto lg:h-full lg:w-auto object-cover" />

                <div className="py-10 flex flex-col items-center px-5">
                  <p className="text-[20px] font-bold">Thủa ban đầu còn rất đơn sơ</p>
                  <p className="text-justify">
                    Xứ đoàn TNTT ban đầu gồm 174 thành viên thuộc các ngành Ấu Nhi,Thiếu Nhi ,Nghĩa Sĩ và Dự Trưởng
                  </p>
                </div>
              </div>
            </li>
            <li className="lg:h-[200px] w-full ">
              <div className="bg-primary overflow-hidden mr-0 ml-auto lg:w-2/3 h-full  rounded-xl shadow-xl border-[1px] border-solid border-black  flex flex-col lg:flex-row">
                <img src={img1} alt="" className="w-full h-auto lg:h-full lg:w-auto object-cover" />
                <div className="py-10 flex flex-col items-center px-5">
                  <p className="text-[20px] font-bold">Thủa ban đầu còn rất đơn sơ</p>
                  <p className="text-justify">
                    Xứ đoàn TNTT ban đầu gồm 174 thành viên thuộc các ngành Ấu Nhi,Thiếu Nhi ,Nghĩa Sĩ và Dự Trưởng
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex justify-center w-full h-auto pt-20" id="thankyou">
          <div className=" flex flex-col items-center w-2/3 p-5 lg:p-20 bg-[#FAF3E0] ">
            <p className="text-[30px] text-center">Lời cảm ơn</p>
            <p className="mt-10 text-justify">
              Cảm ơn sự sát cánh , đồng hành của các quý cha ,quý tu sĩ , ban hội đồng mục vụ giáo xứ , các ông trương
              bà quản và các bậc phụ huynh đã luôn theo dõi và ủng hộ
            </p>
            <p className="mt-10 text-justify">
              Cảm ơn sự sát cánh , đồng hành của các quý cha ,quý tu sĩ , ban hội đồng mục vụ giáo xứ , các ông trương
              bà quản và các bậc phụ huynh đã luôn theo dõi và ủng hộ
            </p>{' '}
            <p className="mt-10 text-justify">
              Cảm ơn sự sát cánh , đồng hành của các quý cha ,quý tu sĩ , ban hội đồng mục vụ giáo xứ , các ông trương
              bà quản và các bậc phụ huynh đã luôn theo dõi và ủng hộ
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col pt-[100px]" id="events">
          <p className="text-[30px]">Thời gian sự kiện</p>
          <div className="shadow-xl flex flex-col mt-[30px] items-center rounded-lg">
            <img
              src="https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/306328693_469725801870725_5581983097478824924_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEPvd7ueSTyBkypmBHEjXzEI56JilnZyW0jnomKWdnJbfUhv00AFv5UF2Ok6Us4DKNP3xT_l76yYUvr9EvZ1MAb&_nc_ohc=1bMIHeCSz38Q7kNvgEBs81k&_nc_ht=scontent.fhan20-1.fna&_nc_gid=A2HmBjMjY39QBsvvf0LRWnN&oh=00_AYCF2Ezna5k-ZrjTq-NSBSAj1rARQLdcnXdZVw2NqQIJSQ&oe=66EF748A"
              alt=""
              className="w-[250px] object-cover"
            />
            <p className="mt-10">Địa điểm : Giáo xứ Thân Thượng</p>
            <p className="mb-10">Thời gian : 19:00</p>
          </div>
        </div>
      </main>
      <footer className="h-[100px] w-full bg-primaryTo mt-20"></footer>
    </div>
  )
}

export default App
