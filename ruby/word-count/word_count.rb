# frozen_string_literal: true

# Wordcount implementation
class Phrase
  def initialize(word)
    word.gsub!(/[,\n:!&@$%^.]|\s['"]|['"]\s/, ' ')
    @word = word.split
  end

  attr_accessor :word

  def word_count
    counts = Hash.new(0)
    @word.each do |word|
      word.downcase!
      counts[word] += 1
    end
    counts
  end
end
