module.exports = {
	// PORT: process.env.PORT || 8080,
	DATABASE_URL: process.env.DATABASE_URL || global.DATABASE_URL || 'mongodb://lightsage88:Walruses8@ds161029.mlab.com:61029/9t',
	JWT_SECRET: process.env.JWT_SECRET || 'pepperTheCat',
	JWT_EXPIRY: process.env.JWT_EXPIRY || '15m',
	API_BASE_URL: process.env.REACT_APP_API_BASE_URL || "https://localhost:5000"
};