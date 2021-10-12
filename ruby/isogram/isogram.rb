=begin
Write your code for the 'Isogram' exercise in this file. Make the tests in
`isogram_test.rb` pass.

To get started with TDD, see the `README.md` file in your
`ruby/isogram` directory.
=end
# Determine if a word or phrase is an isogram.
class Isogram
  def self.isogram?(input)
    input = input.gsub(/\W/, '').upcase
    len = input.size
    c_test = true
    while len > 0 && c_test
      c = input.chr
      input = input[1, len]
      c_test = !input.include?(c)
      len -= 1
    end
    c_test
  end
end
