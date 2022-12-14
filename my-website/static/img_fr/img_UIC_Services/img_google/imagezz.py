# Python program to rename all file
# names in your directory
import os
 
for count, f in enumerate(os.listdir()):
    f_name, f_ext = os.path.splitext(f)
    f_name = "image" + f_name[-3:]
    new_name = f'{f_name}{f_ext}'
    print(f+"-->"+new_name)
    os.rename(f, new_name)
