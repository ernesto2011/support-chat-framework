export const formatDate = (date: Date ) => {
    return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: 'numeric',
    });
}