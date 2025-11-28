# Use official PHP with Apache
FROM php:8.2-apache

# Enable Apache mod_rewrite (needed for Laravel routes)
RUN a2enmod rewrite

# Install PHP extensions Laravel needs
RUN docker-php-ext-install pdo pdo_mysql

# Copy project files into container
COPY . /var/www/html

# Set working directory
WORKDIR /var/www/html

# Give Apache permission
RUN chown -R www-data:www-data /var/www/html

# Expose port 80
EXPOSE 80
