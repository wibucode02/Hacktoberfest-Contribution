function mumbling(str) {
  const helper = (str, index, result) => {
    if (str.length === 1) {
      const [char] = str
      return result + char.toUpperCase() + char.toLowerCase().repeat(index - 1)
    } else {
      const [char, ...rest] = str
      return helper(
        rest,
        index + 1,
        result + char.toUpperCase() + char.toLowerCase().repeat(index - 1) + '-'
      )
    }
  }
 
  return helper(str, 1, '')
}
