import itertools

def compute25(string):
    int_numbers = [int(x) for x in string]
    solutions = []
    operations = ['+', '-', '*', '/',
                  '+', '-', '*', '/',
                  '+', '-', '*', '/']

    ops = list(itertools.permutations(operations, 3))
    nums = list(itertools.permutations(int_numbers, 4))

    for operations in ops:
        for numbers in nums:
            total_sum = numbers[0]
            solution = f'((({numbers[0]}'
            history = []
            for i in range(3):

                # podas
                if total_sum < 25 and (1 in history and 3 in history):
                    break
                if total_sum > 25 and (2 in history and 4 in history):
                    break

                n = numbers[i+1]
                if operations[i] == '+':
                    total_sum += n
                    history.append(1)

                    solution += f' + {n})'
                if operations[i] == '-':
                    total_sum -= n
                    solution += f' - {n})'
                    history.append(2)

                if operations[i] == '*':
                    total_sum *= n
                    solution += f' * {n})'
                    history.append(3)

                if operations[i] == '/':
                    total_sum /= n
                    solution += f' / {n})'
                    history.append(4)

            if total_sum == 25 and solution not in solutions:
                solutions.append(solution)

    return solutions


def parser_solution(solutions):
    if len(solutions) == 0:
        print('SIN SOLUCIÓN')
    enum = 1
    for solution in solutions:
        print(f'{enum}.- {solution}')
        enum += 1


num_input = input('Enter number: ')
parser_solution(compute25(num_input))
