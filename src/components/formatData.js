export function formatPosts(posts) {
    // console.log('posts:', posts);
    return posts.map((post) => ({
        title: `Post ${post.id} by User ${post.userId}`,
        body: post.body,
    }));
}

export function formatTodos(todos) {
    return todos.map((todo) => ({
        title: `Todo ${todo.id} by User ${todo.userId}`,
        body: todo.title,
    }));
}

export function formatUsers(users) {
    return users.map((user) => ({
        title: `User ${user.id}`,
        body: `Name: ${user.name}\nEmail: ${user.email}\nPhone: ${user.phone}`,
    }));
}