class Series
  def initialize(serie)
    @length = serie.length
    @serie = serie
  end

  def slices size
    raise ArgumentError if size > @length
    @serie.chars.each_cons(size).map(&:join)
  end
end
