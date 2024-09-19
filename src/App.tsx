import { faBars, faClose, faHeart, faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useRef, useState } from 'react'
import './App.css'
import img1 from './assets/1b5a348c4fede9b3b0fc.jpg'
import img2 from './assets/6a6208b073d1d58f8cc0.jpg'
import imgEvt from './assets/lich.jpg'
import mp3 from './assets/bgaudio.mp3'
import imgTochu from './assets/tochuc2.png'
import { ref, push, set, onValue } from 'firebase/database'
import { database } from './firebaseConfig' // Import Firebase Database

function App() {
  const [open, setOpen] = useState<boolean>(false)
  const [play, setPlay] = useState<boolean>(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [greeting, setGreeting] = useState('')
  const [senderName, setSenderName] = useState('')
  const [greetingsList, setGreetingsList] = useState<any>([])

  useEffect(() => {
    const bgAudio = new Audio(mp3)
    audioRef.current = bgAudio

    return () => {
      bgAudio.pause()
    }
  }, [])

  // Xử lý khi người dùng submit lời chúc
  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (greeting.trim()) {
      // Tạo một key mới cho lời chúc
      const newGreetingKey = push(ref(database, 'greetings')).key

      // Lưu lời chúc cùng với tên người gửi vào Firebase
      set(ref(database, 'greetings/' + newGreetingKey), {
        id: newGreetingKey,
        message: greeting,
        sender: senderName,
      })
      window.alert('Đã gửi lời chúc <3')
      // Xóa nội dung input sau khi gửi
      setGreeting('')
      setSenderName('')
    }
  }

  // Lấy dữ liệu lời chúc từ Firebase
  useEffect(() => {
    const greetingsRef = ref(database, 'greetings')

    onValue(greetingsRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        const greetingsArray = Object.values(data)
        setGreetingsList(greetingsArray.reverse())
      }
    })
  }, [])

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
          <a href="#" className="text-[20px]  lg:text-[40px] text-textColor font-bold">
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
              Lời cầu nguyện
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
            <li>Lời cầu nguyện</li>
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
          <div className="flex justify-center items-center lg:h-[400px] bg-primaryTo">
            <div className="text-[15px] lg:text-[26px] text-textColor text-justify p-10 gap-5">
              <p className=" text-center">
                Cảm ơn sự sát cánh , đồng hành của các quý cha ,quý tu sĩ , ban hội đồng mục vụ giáo xứ , các ông trương
                bà quản và các bậc phụ huynh đã luôn theo dõi và ủng hộ
              </p>
              <p className="text-center">Cảm ơn các em chiên con đã luôn ngoan ngoãn và vâng lời</p>{' '}
              <p className=" text-center">
                Cảm ơn các bạn Thiếu Nhi , Nghĩa Sĩ , Hiệp Sĩ đã luôn cộng tác trong công việc của xứ đoàn
              </p>
              <p className=" text-center">
                Cảm ơn các anh/chị Huynh Trưởng,Dự Trưởng đã luôn sẵn sàng hy sinh , hết mình phụng sự việc nhà Chúa nói
                chung và của xứ đoàn nói riêng
              </p>
            </div>
          </div>
        </div>
        <div className="pt-5 lg:pt-[100px]" id="history">
          <span className="h-[100px] flex justify-center items-center text-[30px]">Lịch sử hình thành</span>
          <ul className="flex flex-col gap-10 px-5 lg:px-20">
            <li className="lg:h-[300px] w-full">
              <div className="bg-primary w-full lg:w-2/3 h-full rounded-xl shadow-xl border-[1px] border-solid border-black overflow-hidden flex flex-col lg:flex-row-reverse">
                <img src={img1} alt="" className="w-full h-auto lg:h-full lg:w-auto object-cover" />
                <div className="py-10 flex flex-col items-center px-5">
                  <p className="text-[20px] lg:text-[30px] font-bold">Thuở ban đầu còn rất đơn sơ</p>
                  <p className="text-center lg:text-[22px]">
                    Xứ đoàn TNTT ban đầu gồm 174 thành viên thuộc các ngành Ấu Nhi,Thiếu Nhi ,Nghĩa Sĩ và Dự Trưởng
                  </p>
                </div>
              </div>
            </li>
            <li className="lg:h-[300px] w-full ">
              <div className="bg-primary overflow-hidden mr-0 ml-auto lg:w-2/3 h-full  rounded-xl shadow-xl border-[1px] border-solid border-black flex flex-col lg:flex-row">
                <img src={img2} alt="" className="w-full h-auto lg:h-full lg:w-auto object-cover" />

                <div className="py-10 flex flex-col items-center px-5">
                  <p className="text-[20px] lg:text-[30px] font-bold">Vị cha già đáng kính</p>
                  <p className="text-center lg:text-[22px]">
                    Cha tuyên úy của xứ đoàn chúng con là cha Fx.As Nguyễn Tiến Tám . Người đã nâng niu dìu dắt chúng
                    con từ những bước chân đầu tiên
                  </p>
                </div>
              </div>
            </li>
            <li className="lg:h-[300px] w-full  ">
              <div className="bg-primary overflow-hidden left-0 lg:w-2/3 h-full  rounded-xl shadow-xl border-[1px] border-solid border-black  flex flex-col lg:flex-row-reverse">
                <img src={img1} alt="" className="w-full h-auto lg:h-full lg:w-auto object-cover" />

                <div className="py-10 flex flex-col items-center px-5">
                  <p className="text-[20px] lg:text-[30px] font-bold">Sự phát triển</p>
                  <p className="text-center lg:text-[22px]">
                    Hiện nay xứ đoàn ngày một phát triển lớn mạnh thêm , số đoàn viên đã tăng lên nhiều , xứ đoàn cũng
                    có thêm 3 ngành nữa là Chiên Con, Hiệp Sĩ và Huynh Trưởng
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="pt-10">
          <p className="text-center text-[30px]">Tổ chức xứ đoàn</p>
          <img src={imgTochu} alt="Hình ảnh tổ chức xứ đoàn" className="w-full h-auto object-cover" />
        </div>
        <div className="flex justify-center w-full h-auto pt-20" id="thankyou">
          <div className=" flex flex-col items-center mx-3 p-5 lg:p-20 bg-[#FAF3E0] ">
            <p className="text-[30px] text-center rounded-xl">Lời xin lỗi</p>
            <p className=" text-start indent-5">
              Chúng con xin lỗi quý cha , quý tu sĩ , ban HĐMV giáo xứ , cùng các đấng bậc đã bỏ thời gian , tâm huyết
              ra để hướng dẫn đồng hành cùng chúng con mà có đôi lúc chúng con ngỗ nghịch , không vâng lời làm mọi người
              buồn .Chúng con xin hứa sẽ cố gắng thay đổi để đưa Xứ đoàn ngày càng thăng tiến hơn
            </p>
          </div>
        </div>
        <div className="mt-[80px] lg:px-10  bg-center text-white bg-no-repeat bg-cover object-cover w-full bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-small-girl-standing-in-front-of-a-window-hand-in-prayer-image_2694007.jpg')]">
          <div className="flex flex-col p-5 lg:p-20 bg-[rgba(0,0,0,0.3)]">
            <p className="text-[26px] lg:text-[36px] text-center">Lời cầu nguyện</p>
            <p className="indent-6 mt-5 px-5 lg:px-20 text-start">
              "Nguyện xin Thiên Chúa qua lời cầu bầu của Thánh quan thầy Phanxico Assisi ban xuống trên quý cha , quý tu
              sĩ nam nữ , quý ân nhân thân nhân để mọi người tiếp tục đồng hành và bảo ban chúng con . Xin cho xứ đoàn
              chúng con ngày càng phát triển ,ngày càng lớn mạnh trong tình yêu thương của Thiên Chúa , Mẹ Maria và
              Thánh quan thầy xuống trên quý cha , quý tu sĩ nam nữ , quý ân nhân thân nhân để mọi người tiếp tục đồng
              hành và bảo ban chúng con . Xin cho xứ đoàn chúng con ngày càng phát triển , lớn mạnh trong tình yêu
              thương của Thiên Chúa , Mẹ Maria và Thánh quan thầy"
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col pt-[100px] px-2" id="events">
          <p className="text-[30px] lg:text-[40px]">Chương trình ngày lễ</p>
          <div className=" shadow-xl flex flex-col mt-[30px] items-center rounded-lg overflow-hidden lg:px-20 pb-10 border-[1px] border-solid border-black">
            <img src={imgEvt} alt="" className="w-full object-cover" />
          </div>
        </div>
        <div className="flex flex-col w-full pt-20 lg:flex-row p-3 lg:p-20 bg-red-200 gap-10 bg-no-repeat bg-center bg-cover h-full]">
          <div className="flex-col flex-1 items-center rounded-xl overflow-hidden border-[4px] border-solid border-red-500">
            <form onSubmit={handleSubmit} className=" flex flex-col bg-white p-10 gap-3">
              <h1 className="text-center text-[25px] lg:text-[36px] font-bold text-amber-700">
                Gửi lời chúc cho xứ đoàn
              </h1>
              <span className="lg:text-[24px]">Nhập họ và tên</span>
              <input
                type="text"
                value={senderName}
                className="border-[2px] border-solid border-gray-200 h-10 lg:h-[60px] outline-none "
                onChange={(e) => setSenderName(e.target.value)}
              />
              <br />
              <span className="lg:text-[24px]">Nhập lời chúc</span>
              <textarea
                value={greeting}
                onChange={(e) => setGreeting(e.target.value)}
                required
                className="border-[2px] border-solid border-gray-200 h-20 outline-none lg:h-[200px]"
              />
              <br />
              <button
                type="submit"
                className=" bg-amber-700 p-2 lg:px-10 lg:py-5 mx-auto my-auto rounded-2xl hover:bg-green-500 font-bold  uppercase">
                Gửi lời chúc
              </button>
            </form>
          </div>
          <div className="flex-1 border-[4px] border-solid border-red-500 bg-white rounded-2xl overflow-hidden flex flex-col ">
            <h2 className="p-10 text-center  text-amber-700 text-[26px] lg:text-[36px] font-bold">
              Lời chúc cho xứ đoàn
            </h2>
            <ul className="overflow-auto h-[500px]">
              {greetingsList.map((greet: any, index: number) => (
                <li key={greet.id} className={`flex flex-col p-5 ${index % 2 == 0 ? 'bg-[#fff0f1]' : 'bg-white'}`}>
                  <strong className="text-[22px]">{greet.sender ? greet.sender : 'Ẩn danh'}</strong>
                  <p className="text-wrap">{greet.message}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <span
          id="play_button"
          className="fixed z-10 bottom-7 left-6  rounded-[50%] bg-green-400 h-10 w-10 flex justify-center items-center"
          onClick={() => {
            if (!play) {
              audioRef.current!.play()
              audioRef.current!.loop = true
            } else {
              audioRef.current!.pause()
            }
            setPlay(!play)
          }}>
          <FontAwesomeIcon icon={!play ? faPlay : faPause} size="1x" />
        </span>
      </main>
      <footer className="h-[80px] w-full bg-primaryTo mt-20 font-bold uppercase text-textColor flex justify-center items-center text-[20px] py-2">
        <FontAwesomeIcon icon={faHeart} size="1x" />
        <p className="mx-5 text-[15px] text-wrap text-center">XỨ ĐOÀN PHANXICO ASSISI GIÁO XỨ THÂN THƯỢNG </p>
        <FontAwesomeIcon icon={faHeart} size="1x" />
      </footer>
    </div>
  )
}

export default App
