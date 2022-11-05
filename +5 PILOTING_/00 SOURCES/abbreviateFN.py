import os
path = "C:\\Users\\christian\\Downloads\\Sandbox\\Sandboxx"
files = (os.listdir(path))
n = 1
for fileName in files:
    if len(fileName) < 100:
        print(fileName)
        print("^//" + str(n)+" Parsed - File Name is " +
              str(len(fileName)) + " characters long.")

    else:
        # Split on the extension.
        split = fileName.split(".")
        # Get the first 5 characters in the file name
        briefName = split[0][:60]
        # Extension
        ext = split[1]
        print("Renaming " + fileName + " to " + briefName + "." + ext)

        old_file = os.path.join(path, fileName)
        new_file = os.path.join(path, briefName + "." + ext)

        os.rename(old_file, new_file)
        print("^//" + str(n)+" Parsed - Shortened File Name is " +
              str(len(briefName)) + " characters long.")
    n = n + 1
# REFERENCES:
# RDHarles // https: // community.esri.com/t5/python-questions/how-to-make-long-file-name-shorter/td-p/738774
# https://community.esri.com/t5/python-questions/how-to-make-long-file-name-shorter/td-p/738774
# https://stackoverflow.com/questions/2225564/get-a-filtered-list-of-files-in-a-directory
# https://docs.python.org/3/library/glob.html#glob.glob
# https://stackoverflow.com/questions/22575662/filename-too-long-in-git-for-windows
# https://stackoverflow.com/questions/35113180/python-str-object-has-no-attribute-name-when-using-a-function-variable-to-ca
# https://www.programiz.com/python-programming/examples/file-name-from-file-path
# salman C_ SHUAIB, FlowerEconomics.com
