=begin
Write your code for the 'Acronym' exercise in this file. Make the tests in
`acronym_test.rb` pass.

To get started with TDD, see the `README.md` file in your
`ruby/acronym` directory.
=end

# converts a long name to its acronym
class Acronym
  def self.abbreviate(long_name)
    long_name.upcase!
    words = long_name.scan(/\w+/)
    abb = ''
    words.each do |word|
      abb << word.chr
    end
    abb
  end
end
