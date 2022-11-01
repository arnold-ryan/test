def print_evens(user_input):
    num = int(user_input)
    evens = []
    for i in range(1, num):
        if i % 2 == 0:
            evens.append(i)
    return evens


def validate_and_execute():
    user_input = input("Please enter a number: \n")
    if user_input.isdigit():
        return print_evens(user_input)
    else:
        return "Please enter a positive number"


print(validate_and_execute())
