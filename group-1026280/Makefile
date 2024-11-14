NAME = my_ls
CC = gcc
CFLAGS = -Wall -Wextra -Werror -I$(INC_DIR)
SRC_DIR = src
INC_DIR = include
SRCS = $(addprefix $(SRC_DIR)/, main.c my_ls.c)
OBJS = $(SRCS:.c=.o)

all: $(NAME)

$(NAME): $(OBJS)
    $(CC) $(CFLAGS) -o $(NAME) $(OBJS)

$(OBJS): $(SRC_DIR)/%.o : $(SRC_DIR)/%.c | $(SRC_DIR)
    $(CC) $(CFLAGS) -c $< -o $@

$(SRC_DIR):
    mkdir -p $(SRC_DIR)

clean:
    rm -f $(OBJS)

fclean: clean
    rm -f $(NAME)

re: fclean all
