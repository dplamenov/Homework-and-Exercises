﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Homework
{
    class ChooseaDrink
    {
        static void Main(string[] args)
        {
            var profession = Console.ReadLine();
            if (profession == "Athlete")
            {
                Console.WriteLine("Water");
            }else if (profession == "Businessman" || profession == "Businesswoman")
            {
                Console.WriteLine("Coffee");
            }else if (profession == "SoftUni Student")
            {
                Console.WriteLine("SoftUni Student");
            }
            else
            {
                Console.WriteLine("Tea");
            }


        }
    }
}
