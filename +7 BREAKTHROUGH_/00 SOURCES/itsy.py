# https: // stackoverflow.com/questions/22575662/filename-too-long-in-git-for-windows
# set core.longpaths to true as explained in other answers.
# git config --system core.longpaths true

# Keyword: "truncate"

# REFERENCE: itsy bitsy polka dot bikini
# A program that finds filenames that are too long for upload to Github
# The program chops off the filenames at the nth degree of acceptability
# (260 Characters)

# Pseudocode:
# Search in folder for filenames longer than n characters
