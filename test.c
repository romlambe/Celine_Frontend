char	**ft_split(char *str, char *charset)
{
	char	**arr_word;
	int		word_count;

	word_count = count_word(str, charset);
	arr_word = (char **)malloc(sizeof(char *) * (word_count + 1));
	arr_word[word_count] = 0;
	write_word(arr_word, str, charset);
	return (arr_word);
}

