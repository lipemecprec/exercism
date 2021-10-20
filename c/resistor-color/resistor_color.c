#include "resistor_color.h"

int	color_code(resistor_band_t color)
{
	return (color);
}

int *colors()
{
	static int		a[10];
	resistor_band_t	color;

	color = BLACK;
	while (color <= WHITE)
	{
		a[color] = color;
		color++;
	}

	return (a);
}