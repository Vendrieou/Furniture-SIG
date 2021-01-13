export const currencyFormatter = (currency) => {
    if (typeof currency === 'string' || typeof currency === 'number') {
      if (typeof currency === 'number' && currency === 0) {
        return 'Free'
      }
      if (typeof currency === 'string' && currency === '0') {
        return 'Free'
      }
      return `Rp ${currency.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
    }
    return 'Rp 0'
}

export const truncStr = (string, limit) => {
    return string.length > limit
      ? `${string
        .trim()
        .substring(0, limit - 3)
        .trim()}...`
      : string
  }