import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import { FcReddit } from 'react-icons/fc'
import Link from 'next/link'
import styles from '../styles/mainFooter.module.css'

export const MainFooter = () => {
    return (
        <footer className={styles.MainFooter}>
            <div>
                <h5>Quick Links</h5>
                <Link href="/about"><a>About Us</a></Link>
                <Link href="/programs"><a>Programs</a></Link>
                <Link href="/volunteer"><a>Volunteer</a></Link>
                <Link href="/contact"><a>Contact us</a></Link>
                <Link href="/donate"><a>donate</a></Link>
                <Link href="/enroll"><button>Enroll</button></Link>
            </div>

            <div>
                <h5>Important Links</h5>
                <Link href="/about"><a>Terms & Conditions</a></Link>
                <Link href="/programs"><a>Privacy Policy</a></Link>
                <Link href="/volunteer"><a>Partners & Sponsors</a></Link>
                <Link href="/contact"><a>News</a></Link>
            </div>

            <div>
                <h5>Check us out</h5>
                <FaInstagram />
                <FiTwitter />
                <FcReddit />
            </div>
        </footer>
    )
}