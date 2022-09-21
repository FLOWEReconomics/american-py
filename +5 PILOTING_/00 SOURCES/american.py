import time

start_time = time.time()
seconds = input("Enter: ")
seconds = int(seconds)

if seconds > 2552:
    print('''Bitchslap for thee_ Thou shalt not labor or make labor others more than 2552 instants_''')
else:

    while True:
        seconds <= 2552
        current_time = time.time()
        elapsed_time = current_time - start_time
        print(elapsed_time)
        if elapsed_time > seconds:
            print("Finished iterating in: " +
                  str(int(elapsed_time)) + " instants")
            break
