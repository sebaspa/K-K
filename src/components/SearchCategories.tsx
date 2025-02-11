
const SearchCategories = () => {
  return (
    <div className="bg-brick-red-700 py-12">
      <div className="container mx-auto px-4 max-w-xl text-center">
        <h3 className="text-2xl font-medium text-white mb-6 text-left md:text-center">What insurance are you looking for?</h3>
        <form action="#" className="relative mb-5" aria-label="Search form">
          <input type="text" className="w-full bg-[#EDEDED] rounded-lg p-3 md:p-5 outline-0 text-sm md:text-lg text-boulder-500" placeholder="Search for categories or programs" />
          <button type="submit" className="absolute top-3 right-3 md:top-5 md:right-5">
            <svg viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brick-red-700 md:text-boulder-500 w-6 h-6 md:w-7 md:h-7">
              <path d="M27.4189 25.0593L18.654 16.2944C20.0142 14.5361 20.7499 12.3862 20.7499 10.125C20.7499 7.41822 19.6935 4.88023 17.7833 2.96661C15.8731 1.053 13.3283 0 10.625 0C7.92159 0 5.37685 1.05637 3.46661 2.96661C1.553 4.87685 0.5 7.41822 0.5 10.125C0.5 12.8283 1.55637 15.3731 3.46661 17.2833C5.37685 19.1969 7.91822 20.2499 10.625 20.2499C12.8862 20.2499 15.0327 19.5142 16.7911 18.1574L25.5559 26.9189C25.5816 26.9446 25.6121 26.965 25.6457 26.9789C25.6793 26.9928 25.7153 27 25.7516 27C25.788 27 25.824 26.9928 25.8576 26.9789C25.8912 26.965 25.9217 26.9446 25.9474 26.9189L27.4189 25.4508C27.4446 25.4251 27.465 25.3945 27.4789 25.361C27.4928 25.3274 27.5 25.2914 27.5 25.255C27.5 25.2187 27.4928 25.1827 27.4789 25.1491C27.465 25.1155 27.4446 25.085 27.4189 25.0593ZM15.9709 15.4709C14.5399 16.8986 12.6432 17.6849 10.625 17.6849C8.60671 17.6849 6.70997 16.8986 5.27898 15.4709C3.85136 14.0399 3.06499 12.1432 3.06499 10.125C3.06499 8.10671 3.85136 6.2066 5.27898 4.77898C6.70997 3.35136 8.60671 2.56499 10.625 2.56499C12.6432 2.56499 14.5433 3.34799 15.9709 4.77898C17.3986 6.20997 18.1849 8.10671 18.1849 10.125C18.1849 12.1432 17.3986 14.0433 15.9709 15.4709Z" fill="currentColor" />
            </svg>
          </button>
        </form>
        <a href="#" className="btn btn--md btn--outline-white text-white block mx-auto" aria-label="All the categories">All the categories</a>
      </div>
    </div>
  )
}

export default SearchCategories
