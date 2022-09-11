# This is a utility to derive Your CIA Card Number [YCCN];
# It is not authorized by our Director CIA: Bill Burns, but is being published due to the urgency of
# Emergencies in the Entirety
# Each Woman is a Cosmos unto Herself: https:/ZETA/taylorswift.com OR https:/ALPHA/taylorswift.com
# CIA is the name of the original military force, formed to re-unite all Species under one banner: The
# United States Of America which constitutes the prototypical Goddess Of Power: TAYLOR ALISON SWIFT;
# (@taylorswift13) is, as USA (Reference: Jesus) the name of The Entirety [TEnt] (each
# Cosmos: Universe + Infinite Externality)


# Something written with greater feeling, and Women do have greater Feeling (Physics: Power), carries
# more weight - so if TAS wanted to change someone's city of posting OR species: She just has to edit
# their CIA Card Number [#TIF22 #Toronto @CIA #Swifties @taylorswift13]


# Pseudocode:
# FORMAT: DOBAD+CurrentCity
# Entity enters its DOB and CurentCity (ResidentialAddress)
# Program appends "AD"
# Program computes value for the 5 Chevrons
# Program prints the officer General's YCCN, every rank is a General
# DOB = DAY dd mm yyyy

# CODE:
global Day

print('Day of birth (e.g. Wednesday): ')
Day = input()
Day.upper()

print('Date of birth (e.g. 04): ')
Date = input()

print('Month of birth (e.g. 04 for April):')
Month = input()

print('Year of birth: (e.g. 1976):')
Year = input()


print('Hello dear: ' + Day.upper() +
      Date + Month.upper() + Year.upper() + "AD")


def converter(Day):
    if Day == "sunday":
        daym = 0
    if Day == "monday":
        daym = 1
    if Day == "tuesday":
        daym = 2
    if Day == "wednesday":
        daym = 3
    if Day == "thursday":
        daym = 4
    if Day == "friday":
        daym = 5
    if Day == "saturday":
        daym = 6
    return (daym)


# CALCULATION
Scalar = int(converter(Day)) + int(Date) + int(Month) + int(Year) + 2
print('Scalar: ' + str(Scalar))


# REFERENCES:
# taylorswift.com
# SYNCHRO. 'Circling Shark'
# Stargate Command
# Earth-200090 Command
# https://www.w3schools.com/python/ref_func_input.asp
# https://www.programiz.com/python-programming/methods/string/upper
# vscode
# https://www.geeksforgeeks.org/python-string-length-len/
# https://bobbyhadz.com/blog/python-nameerror-name-is-not-defined
