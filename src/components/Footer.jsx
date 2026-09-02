function Footer() {
    const CurrentYear = new Date().getFullYear();
    return(
        <footer>
            <p>Copyright &#169; (currentYear)</p>
        </footer>
    )
}

export default Footer;