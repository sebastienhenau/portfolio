export const getDateFromDDMMYYYY = (value: string) => {
    const [day, month, year] = value.split('/');

    return new Date(`${year}-${month}-${day}`);
};

export const getFormattedDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
};
