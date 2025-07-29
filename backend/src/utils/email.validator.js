const isValidEmail = (email) => {
    if (typeof email !== 'string') return false;

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export default isValidEmail;
