import '../styles/About.css'

import { FaPhp, FaHtml5, FaReact, FaBootstrap, FaRust, FaLaravel, FaGit } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { MdOutlineCss } from "react-icons/md";
import { FaGolang } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiCodeigniter } from "react-icons/di";


function About() {
    return (
        <section id="about">
            <div className='wrapper'>
                <h3>About</h3>
                Perkenalkan nama saya asep maulana, S1 Sistem Informasi STMIK Nusa
            Mandiri jakarta terkait coding adalah makanan sekaligus hobi saya
            setiap hari. Pengalaman kerja pertama kali saya dibidang IT adalah
            sebagai Software Tester dan support frontend Kurang lebih 2 tahun di
            salah satu perusahaan di jakarta, dan untuk mempertajam ilmu coding
            saya di programming, saya mengikuti kursus di salah satu pelatihan
            IT ternama di jakarta yaitu Course-net indonesia. Mengambil
            peminatan program Full stack web developer javascript. Banyak sekali
            ilmu yang saya dapatkan disana sehingga saat ini saya memiliki
            kemampuan lebih tentang pengetahuan programming javascript disisi
            backend NODE.JS & frontend react Js. saya sangat suka sekali ngoding
            terkadang sampai lupa waktu jika menemukan debug atau error. Dimana
            saya typical seorang yang pantang menyerah sebelum mendapatkan hasil
            yang di inginkan. Selain itu saya adalah seorang yang berdisiplin
            tinggi serta loyalitas tinggi terhadap perusahaan. Suatu ketika saya
            pun mendapat penghargaan kecil atas kedisiplinan yang saya lakukan.
                <h4>Programming Language & Tools</h4>
                <div className="skills">
                    <FaPhp /><FaHtml5 /><SiJavascript /><FaReact /><MdOutlineCss />
                    <FaGolang /><FaBootstrap /><FaRust /><RiTailwindCssFill />
                    <FaLaravel /><DiCodeigniter /><FaGit />

                </div>
            </div>
        </section>
    )
}

export default About