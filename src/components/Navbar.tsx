import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/theme/useTheme';
import { useContent } from '@/context/content';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();
  const { content } = useContent();
  const { navigation } = content;

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <nav className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">DenuncieAqui</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="outline" asChild>
            <Link to="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/register">Registar</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden"
          >
            <div className="pt-4 pb-3 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  to={item.url}
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-border my-4" />
              <div className="space-y-3 px-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
                </Button>
                <Button className="w-full justify-start" asChild>
                  <Link to="/register" onClick={() => setIsOpen(false)}>Registar</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
