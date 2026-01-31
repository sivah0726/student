export const Foo = () => (
  <>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>StudyShare - Chemistry Learning Platform</title>
    {/* Firebase SDK */}
    {/* Chart.js */}
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n        :root {\n            --primary: #4f46e5;\n            --primary-dark: #4338ca;\n            --secondary: #6b7280;\n            --success: #10b981;\n            --danger: #ef4444;\n            --warning: #f59e0b;\n            --info: #3b82f6;\n            --light: #f9fafb;\n            --dark: #111827;\n            --border: #e5e7eb;\n            --shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n            --admin-color: #8b5cf6;\n            --card-bg: #ffffff;\n            --sidebar-width: 280px;\n            --header-height: 70px;\n            --chemistry-blue: #3b82f6;\n            --chemistry-green: #10b981;\n            --chemistry-purple: #8b5cf6;\n        }\n\n        * {\n            margin: 0;\n            padding: 0;\n            box-sizing: border-box;\n            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n        }\n\n        body {\n            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);\n            min-height: 100vh;\n            color: #374151;\n        }\n\n        /* Custom Scrollbar */\n        ::-webkit-scrollbar {\n            width: 10px;\n            height: 10px;\n        }\n\n        ::-webkit-scrollbar-track {\n            background: #f1f5f9;\n            border-radius: 5px;\n        }\n\n        ::-webkit-scrollbar-thumb {\n            background: #c7d2fe;\n            border-radius: 5px;\n            transition: background 0.3s;\n        }\n\n        ::-webkit-scrollbar-thumb:hover {\n            background: #a5b4fc;\n        }\n\n        /* Header */\n        .header {\n            background: var(--card-bg);\n            box-shadow: var(--shadow);\n            height: var(--header-height);\n            position: fixed;\n            top: 0;\n            left: 0;\n            right: 0;\n            z-index: 1000;\n            display: flex;\n            align-items: center;\n            padding: 0 2rem;\n            border-bottom: 3px solid var(--primary);\n        }\n\n        .logo {\n            display: flex;\n            align-items: center;\n            gap: 12px;\n            color: var(--primary);\n            font-size: 1.5rem;\n            font-weight: 800;\n            letter-spacing: -0.5px;\n        }\n\n        .logo-icon {\n            width: 40px;\n            height: 40px;\n            background: linear-gradient(135deg, var(--chemistry-blue) 0%, var(--chemistry-purple) 100%);\n            border-radius: 10px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            color: white;\n            font-size: 1.2rem;\n            box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.3);\n        }\n\n        .nav-links {\n            display: flex;\n            gap: 0.5rem;\n            margin-left: 3rem;\n            list-style: none;\n        }\n\n        .nav-link {\n            text-decoration: none;\n            color: var(--secondary);\n            font-weight: 500;\n            padding: 10px 20px;\n            border-radius: 8px;\n            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n            display: flex;\n            align-items: center;\n            gap: 8px;\n        }\n\n        .nav-link:hover,\n        .nav-link.active {\n            background: linear-gradient(135deg, var(--chemistry-blue) 0%, var(--chemistry-purple) 100%);\n            color: white;\n            transform: translateY(-2px);\n            box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.3);\n        }\n\n        .header-actions {\n            margin-left: auto;\n            display: flex;\n            align-items: center;\n            gap: 1rem;\n        }\n\n        .btn {\n            padding: 10px 24px;\n            border: none;\n            border-radius: 8px;\n            font-weight: 600;\n            cursor: pointer;\n            display: flex;\n            align-items: center;\n            gap: 8px;\n            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n            font-size: 0.9rem;\n        }\n\n        .btn-primary {\n            background: linear-gradient(135deg, var(--chemistry-blue) 0%, #1d4ed8 100%);\n            color: white;\n        }\n\n        .btn-primary:hover {\n            transform: translateY(-2px);\n            box-shadow: 0 10px 15px -3px rgba(59, 130, 246, 0.4);\n        }\n\n        .btn-danger {\n            background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);\n            color: white;\n        }\n\n        .btn-admin {\n            background: linear-gradient(135deg, var(--chemistry-purple) 0%, #7c3aed 100%);\n            color: white;\n        }\n\n        .btn-admin:hover {\n            transform: translateY(-2px);\n            box-shadow: 0 10px 15px -3px rgba(139, 92, 246, 0.4);\n        }\n\n        .admin-badge {\n            background: linear-gradient(135deg, var(--chemistry-purple) 0%, #7c3aed 100%);\n            color: white;\n            padding: 6px 12px;\n            border-radius: 20px;\n            font-size: 0.85rem;\n            font-weight: 600;\n            display: flex;\n            align-items: center;\n            gap: 6px;\n            animation: pulse 2s infinite;\n        }\n\n        @keyframes pulse {\n            0%, 100% { opacity: 1; }\n            50% { opacity: 0.8; }\n        }\n\n        /* Main Content */\n        .main-content {\n            margin-top: var(--header-height);\n            min-height: calc(100vh - var(--header-height));\n            display: flex;\n        }\n\n        /* Sidebar */\n        .sidebar {\n            width: var(--sidebar-width);\n            background: var(--card-bg);\n            border-right: 1px solid var(--border);\n            padding: 2rem 0;\n            position: fixed;\n            top: var(--header-height);\n            left: 0;\n            bottom: 0;\n            overflow-y: auto;\n            box-shadow: 5px 0 15px -3px rgba(0, 0, 0, 0.1);\n        }\n\n        .sidebar-section {\n            padding: 0 1.5rem;\n            margin-bottom: 2rem;\n        }\n\n        .sidebar-title {\n            font-size: 0.8rem;\n            text-transform: uppercase;\n            letter-spacing: 0.5px;\n            color: var(--secondary);\n            margin-bottom: 1rem;\n            font-weight: 600;\n        }\n\n        .sidebar-link {\n            display: flex;\n            align-items: center;\n            gap: 12px;\n            padding: 12px 16px;\n            color: var(--dark);\n            text-decoration: none;\n            border-radius: 8px;\n            margin-bottom: 6px;\n            transition: all 0.3s;\n        }\n\n        .sidebar-link:hover,\n        .sidebar-link.active {\n            background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);\n            color: var(--chemistry-blue);\n            transform: translateX(5px);\n        }\n\n        .sidebar-link.active {\n            border-left: 4px solid var(--chemistry-blue);\n            font-weight: 600;\n        }\n\n        /* Content Area */\n        .content-area {\n            flex: 1;\n            margin-left: var(--sidebar-width);\n            padding: 2rem;\n        }\n\n        .content-section {\n            background: var(--card-bg);\n            border-radius: 16px;\n            padding: 2rem;\n            margin-bottom: 2rem;\n            box-shadow: var(--shadow);\n            animation: fadeIn 0.5s ease-out;\n        }\n\n        @keyframes fadeIn {\n            from { opacity: 0; transform: translateY(20px); }\n            to { opacity: 1; transform: translateY(0); }\n        }\n\n        .section-header {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            margin-bottom: 2rem;\n        }\n\n        .section-title {\n            font-size: 1.5rem;\n            font-weight: 700;\n            color: var(--dark);\n            display: flex;\n            align-items: center;\n            gap: 12px;\n        }\n\n        /* Search Box */\n        .search-container {\n            position: relative;\n            max-width: 600px;\n            margin: 0 auto 3rem;\n        }\n\n        .search-box {\n            width: 100%;\n            padding: 18px 24px;\n            padding-left: 56px;\n            border: 2px solid var(--border);\n            border-radius: 12px;\n            font-size: 1rem;\n            background: var(--card-bg);\n            transition: all 0.3s;\n            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n        }\n\n        .search-box:focus {\n            outline: none;\n            border-color: var(--chemistry-blue);\n            box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.2);\n            transform: translateY(-2px);\n        }\n\n        .search-icon {\n            position: absolute;\n            left: 24px;\n            top: 50%;\n            transform: translateY(-50%);\n            color: var(--secondary);\n            font-size: 1.2rem;\n        }\n\n        /* Stats Cards */\n        .stats-grid {\n            display: grid;\n            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n            gap: 1.5rem;\n            margin-bottom: 3rem;\n        }\n\n        .stat-card {\n            background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);\n            border-radius: 12px;\n            padding: 1.5rem;\n            display: flex;\n            align-items: center;\n            gap: 1rem;\n            transition: all 0.3s;\n            border: 1px solid var(--border);\n        }\n\n        .stat-card:hover {\n            transform: translateY(-5px);\n            box-shadow: var(--shadow);\n        }\n\n        .stat-icon {\n            width: 56px;\n            height: 56px;\n            border-radius: 12px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            font-size: 1.5rem;\n            background: linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%);\n            color: var(--chemistry-blue);\n        }\n\n        .stat-content h3 {\n            font-size: 2rem;\n            font-weight: 700;\n            color: var(--dark);\n            margin-bottom: 4px;\n        }\n\n        .stat-content p {\n            color: var(--secondary);\n            font-size: 0.9rem;\n            font-weight: 500;\n        }\n\n        /* Timetable Table */\n        .timetable-container {\n            overflow-x: auto;\n            border-radius: 12px;\n            border: 1px solid var(--border);\n            box-shadow: var(--shadow);\n            background: var(--card-bg);\n        }\n\n        .timetable-table {\n            width: 100%;\n            border-collapse: collapse;\n            min-width: 800px;\n        }\n\n        .timetable-table th {\n            background: linear-gradient(135deg, var(--chemistry-blue) 0%, #1d4ed8 100%);\n            color: white;\n            padding: 1.2rem;\n            text-align: center;\n            font-weight: 600;\n            font-size: 0.9rem;\n            text-transform: uppercase;\n            letter-spacing: 0.5px;\n            position: sticky;\n            top: 0;\n            z-index: 10;\n        }\n\n        .timetable-table th:first-child {\n            border-radius: 12px 0 0 0;\n            min-width: 120px;\n        }\n\n        .timetable-table th:last-child {\n            border-radius: 0 12px 0 0;\n        }\n\n        .timetable-table td {\n            padding: 1rem;\n            border: 1px solid var(--border);\n            vertical-align: top;\n            transition: all 0.3s;\n        }\n\n        .time-cell {\n            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);\n            font-weight: 600;\n            color: var(--dark);\n            text-align: center;\n            font-size: 0.9rem;\n            width: 120px;\n        }\n\n        .class-cell {\n            cursor: pointer;\n            position: relative;\n            min-height: 100px;\n        }\n\n        .class-cell:hover {\n            background: #fafafa;\n        }\n\n        .class-cell.empty {\n            text-align: center;\n            color: var(--secondary);\n            font-style: italic;\n            background: repeating-linear-gradient(\n                45deg,\n                transparent,\n                transparent 10px,\n                rgba(0,0,0,0.02) 10px,\n                rgba(0,0,0,0.02) 20px\n            );\n        }\n\n        .class-card {\n            background: white;\n            border-radius: 8px;\n            padding: 1rem;\n            border-left: 4px solid var(--chemistry-blue);\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n            height: 100%;\n            transition: all 0.3s;\n        }\n\n        .class-card:hover {\n            transform: translateY(-2px);\n            box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1);\n        }\n\n        .class-header {\n            display: flex;\n            justify-content: space-between;\n            align-items: flex-start;\n            margin-bottom: 0.5rem;\n        }\n\n        .class-subject {\n            font-weight: 700;\n            color: var(--dark);\n            font-size: 0.95rem;\n            line-height: 1.3;\n        }\n\n        .class-code {\n            background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);\n            color: var(--chemistry-blue);\n            padding: 4px 8px;\n            border-radius: 6px;\n            font-size: 0.75rem;\n            font-weight: 600;\n        }\n\n        .class-time {\n            font-size: 0.8rem;\n            color: var(--secondary);\n            margin-bottom: 0.75rem;\n            display: flex;\n            align-items: center;\n            gap: 4px;\n        }\n\n        .class-details {\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            gap: 8px;\n            font-size: 0.8rem;\n        }\n\n        .class-detail {\n            display: flex;\n            align-items: center;\n            gap: 6px;\n            color: var(--secondary);\n        }\n\n        .class-detail i {\n            color: var(--chemistry-blue);\n            font-size: 0.9rem;\n        }\n\n        .admin-badge-small {\n            position: absolute;\n            top: 8px;\n            right: 8px;\n            background: var(--chemistry-purple);\n            color: white;\n            padding: 2px 6px;\n            border-radius: 4px;\n            font-size: 0.7rem;\n            font-weight: 600;\n        }\n\n        /* Materials Grid */\n        .materials-grid {\n            display: grid;\n            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n            gap: 1.5rem;\n        }\n\n        .material-card {\n            background: var(--card-bg);\n            border-radius: 12px;\n            overflow: hidden;\n            border: 1px solid var(--border);\n            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n            position: relative;\n        }\n\n        .material-card:hover {\n            transform: translateY(-8px);\n            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);\n            border-color: var(--chemistry-blue);\n        }\n\n        .material-header {\n            padding: 1.5rem;\n            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);\n            border-bottom: 1px solid var(--border);\n            position: relative;\n        }\n\n        .material-category {\n            position: absolute;\n            top: 1rem;\n            right: 1rem;\n            background: linear-gradient(135deg, var(--chemistry-blue) 0%, #1d4ed8 100%);\n            color: white;\n            padding: 6px 12px;\n            border-radius: 20px;\n            font-size: 0.75rem;\n            font-weight: 700;\n            letter-spacing: 0.3px;\n        }\n\n        .material-title {\n            font-size: 1.1rem;\n            font-weight: 700;\n            color: var(--dark);\n            margin-bottom: 0.5rem;\n            line-height: 1.4;\n        }\n\n        .material-subject {\n            color: var(--chemistry-blue);\n            font-size: 0.9rem;\n            font-weight: 600;\n            display: flex;\n            align-items: center;\n            gap: 6px;\n        }\n\n        .material-body {\n            padding: 1.5rem;\n        }\n\n        .material-description {\n            color: var(--secondary);\n            margin-bottom: 1.5rem;\n            line-height: 1.6;\n            font-size: 0.9rem;\n        }\n\n        .material-meta {\n            display: flex;\n            justify-content: space-between;\n            margin-bottom: 1.5rem;\n            padding-bottom: 1.5rem;\n            border-bottom: 1px solid var(--border);\n        }\n\n        .meta-item {\n            display: flex;\n            flex-direction: column;\n            gap: 4px;\n        }\n\n        .meta-label {\n            font-size: 0.75rem;\n            color: var(--secondary);\n            font-weight: 500;\n        }\n\n        .meta-value {\n            font-weight: 600;\n            color: var(--dark);\n            font-size: 0.9rem;\n        }\n\n        .material-actions {\n            display: grid;\n            grid-template-columns: 1fr 1fr;\n            gap: 0.75rem;\n        }\n\n        .btn-sm {\n            padding: 10px 16px;\n            font-size: 0.85rem;\n            border-radius: 8px;\n        }\n\n        .btn-outline {\n            background: transparent;\n            border: 2px solid var(--border);\n            color: var(--dark);\n        }\n\n        .btn-outline:hover {\n            border-color: var(--chemistry-blue);\n            background: rgba(59, 130, 246, 0.05);\n        }\n\n        /* Filters */\n        .filters {\n            display: flex;\n            gap: 1rem;\n            margin-bottom: 2rem;\n            flex-wrap: wrap;\n        }\n\n        .filter-group {\n            flex: 1;\n            min-width: 200px;\n        }\n\n        .filter-label {\n            display: block;\n            margin-bottom: 0.5rem;\n            font-weight: 600;\n            color: var(--dark);\n            font-size: 0.9rem;\n        }\n\n        .filter-select, .filter-input {\n            width: 100%;\n            padding: 10px 16px;\n            border: 2px solid var(--border);\n            border-radius: 8px;\n            background: var(--card-bg);\n            font-size: 0.9rem;\n            transition: all 0.3s;\n        }\n\n        .filter-select:focus, .filter-input:focus {\n            outline: none;\n            border-color: var(--chemistry-blue);\n            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n        }\n\n        /* Marks Specific Styles */\n        .marks-category {\n            padding: 1.5rem;\n            border-radius: 12px;\n            margin-bottom: 1.5rem;\n            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);\n            border: 1px solid var(--border);\n        }\n\n        .marks-category-header {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            margin-bottom: 1rem;\n            padding-bottom: 0.75rem;\n            border-bottom: 2px solid rgba(59, 130, 246, 0.1);\n        }\n\n        .marks-category-title {\n            font-size: 1.1rem;\n            font-weight: 700;\n            color: var(--dark);\n            display: flex;\n            align-items: center;\n            gap: 8px;\n        }\n\n        .marks-category-icon {\n            width: 36px;\n            height: 36px;\n            border-radius: 8px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            color: white;\n            font-size: 1rem;\n        }\n\n        .marks-stats {\n            display: grid;\n            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n            gap: 1rem;\n            margin-bottom: 1.5rem;\n        }\n\n        .marks-stat {\n            background: white;\n            padding: 1rem;\n            border-radius: 8px;\n            text-align: center;\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n        }\n\n        .marks-stat-value {\n            font-size: 1.5rem;\n            font-weight: 700;\n            margin-bottom: 0.25rem;\n        }\n\n        .marks-stat-label {\n            font-size: 0.8rem;\n            color: var(--secondary);\n        }\n\n        .marks-table {\n            width: 100%;\n            border-collapse: collapse;\n            margin-top: 1rem;\n            background: white;\n            border-radius: 8px;\n            overflow: hidden;\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n        }\n\n        .marks-table th {\n            background: rgba(59, 130, 246, 0.1);\n            color: var(--dark);\n            padding: 0.75rem 1rem;\n            text-align: left;\n            font-weight: 600;\n            font-size: 0.85rem;\n        }\n\n        .marks-table td {\n            padding: 0.75rem 1rem;\n            border-bottom: 1px solid var(--border);\n        }\n\n        .marks-table tr:hover {\n            background: rgba(59, 130, 246, 0.03);\n        }\n\n        .grade-badge {\n            padding: 4px 8px;\n            border-radius: 4px;\n            font-size: 0.75rem;\n            font-weight: 600;\n            display: inline-block;\n        }\n\n        .grade-A { background: #10b981; color: white; }\n        .grade-B { background: #3b82f6; color: white; }\n        .grade-C { background: #f59e0b; color: white; }\n        .grade-D { background: #ef4444; color: white; }\n        .grade-F { background: #7f1d1d; color: white; }\n\n        .progress-bar {\n            height: 8px;\n            background: var(--border);\n            border-radius: 4px;\n            overflow: hidden;\n            margin: 0.5rem 0;\n        }\n\n        .progress-fill {\n            height: 100%;\n            border-radius: 4px;\n            transition: width 0.3s ease;\n        }\n\n        .progress-fill.exam { background: linear-gradient(90deg, #3b82f6, #1d4ed8); }\n        .progress-fill.assignment { background: linear-gradient(90deg, #10b981, #059669); }\n        .progress-fill.quiz { background: linear-gradient(90deg, #8b5cf6, #7c3aed); }\n\n        .subject-performance {\n            display: flex;\n            align-items: center;\n            gap: 1rem;\n            margin: 1.5rem 0;\n            padding: 1rem;\n            background: white;\n            border-radius: 8px;\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n        }\n\n        .subject-name {\n            min-width: 150px;\n            font-weight: 600;\n            color: var(--dark);\n        }\n\n        .subject-grade {\n            min-width: 60px;\n            text-align: center;\n        }\n\n        /* Student Performance Styles */\n        .student-performance-grid {\n            display: grid;\n            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n            gap: 1.5rem;\n            margin-bottom: 2rem;\n        }\n\n        .student-card {\n            background: var(--card-bg);\n            border-radius: 12px;\n            overflow: hidden;\n            border: 1px solid var(--border);\n            transition: all 0.3s;\n        }\n\n        .student-card:hover {\n            transform: translateY(-5px);\n            box-shadow: var(--shadow);\n        }\n\n        .student-header {\n            padding: 1.5rem;\n            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);\n            border-bottom: 1px solid var(--border);\n            display: flex;\n            align-items: center;\n            gap: 1rem;\n        }\n\n        .student-avatar {\n            width: 60px;\n            height: 60px;\n            border-radius: 50%;\n            background: linear-gradient(135deg, var(--chemistry-blue) 0%, var(--chemistry-purple) 100%);\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            color: white;\n            font-size: 1.5rem;\n            font-weight: bold;\n        }\n\n        .student-info h3 {\n            font-size: 1.1rem;\n            font-weight: 700;\n            color: var(--dark);\n            margin-bottom: 0.25rem;\n        }\n\n        .student-info p {\n            color: var(--secondary);\n            font-size: 0.9rem;\n        }\n\n        .student-body {\n            padding: 1.5rem;\n        }\n\n        .student-marks {\n            display: flex;\n            flex-direction: column;\n            gap: 1rem;\n        }\n\n        .student-mark-item {\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n            padding: 0.75rem;\n            background: white;\n            border-radius: 8px;\n            border: 1px solid var(--border);\n        }\n\n        .mark-info h4 {\n            font-size: 0.9rem;\n            font-weight: 600;\n            color: var(--dark);\n            margin-bottom: 0.25rem;\n        }\n\n        .mark-info p {\n            font-size: 0.8rem;\n            color: var(--secondary);\n        }\n\n        .mark-score {\n            text-align: right;\n        }\n\n        .mark-percentage {\n            font-size: 1.1rem;\n            font-weight: 700;\n            color: var(--dark);\n        }\n\n        .student-stats {\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            gap: 1rem;\n            margin-top: 1rem;\n            padding-top: 1rem;\n            border-top: 1px solid var(--border);\n        }\n\n        .student-stat {\n            text-align: center;\n        }\n\n        .student-stat-value {\n            font-size: 1.2rem;\n            font-weight: 700;\n            color: var(--chemistry-blue);\n        }\n\n        .student-stat-label {\n            font-size: 0.8rem;\n            color: var(--secondary);\n        }\n\n        /* Comparison Table */\n        .comparison-table {\n            width: 100%;\n            border-collapse: collapse;\n            background: white;\n            border-radius: 8px;\n            overflow: hidden;\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);\n        }\n\n        .comparison-table th {\n            background: rgba(59, 130, 246, 0.1);\n            color: var(--dark);\n            padding: 0.75rem 1rem;\n            text-align: left;\n            font-weight: 600;\n            font-size: 0.85rem;\n            position: sticky;\n            top: 0;\n        }\n\n        .comparison-table td {\n            padding: 0.75rem 1rem;\n            border-bottom: 1px solid var(--border);\n        }\n\n        .comparison-table tr:hover {\n            background: rgba(59, 130, 246, 0.03);\n        }\n\n        .student-rank {\n            width: 30px;\n            height: 30px;\n            border-radius: 50%;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            font-weight: 700;\n            color: white;\n            font-size: 0.9rem;\n        }\n\n        .rank-1 { background: linear-gradient(135deg, #fbbf24 0%, #d97706 100%); }\n        .rank-2 { background: linear-gradient(135deg, #94a3b8 0%, #64748b 100%); }\n        .rank-3 { background: linear-gradient(135deg, #d97706 0%, #92400e 100%); }\n        .rank-other { background: var(--border); color: var(--dark); }\n\n        .performance-trend {\n            display: inline-block;\n            padding: 2px 8px;\n            border-radius: 12px;\n            font-size: 0.75rem;\n            font-weight: 600;\n        }\n\n        .trend-up { background: rgba(16, 185, 129, 0.1); color: var(--success); }\n        .trend-down { background: rgba(239, 68, 68, 0.1); color: var(--danger); }\n        .trend-stable { background: rgba(156, 163, 175, 0.1); color: var(--secondary); }\n\n        /* Modals */\n        .modal {\n            display: none;\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: rgba(0, 0, 0, 0.5);\n            backdrop-filter: blur(5px);\n            z-index: 2000;\n            align-items: center;\n            justify-content: center;\n            animation: modalFadeIn 0.3s ease-out;\n        }\n\n        @keyframes modalFadeIn {\n            from { opacity: 0; }\n            to { opacity: 1; }\n        }\n\n        .modal-content {\n            background: var(--card-bg);\n            border-radius: 20px;\n            width: 90%;\n            max-width: 500px;\n            max-height: 90vh;\n            overflow-y: auto;\n            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n            animation: modalSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n        }\n\n        @keyframes modalSlideIn {\n            from { transform: translateY(50px) scale(0.95); opacity: 0; }\n            to { transform: translateY(0) scale(1); opacity: 1; }\n        }\n\n        .modal-header {\n            padding: 1.5rem 2rem;\n            border-bottom: 1px solid var(--border);\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n        }\n\n        .modal-title {\n            font-size: 1.25rem;\n            font-weight: 700;\n            color: var(--dark);\n            display: flex;\n            align-items: center;\n            gap: 10px;\n        }\n\n        .close-btn {\n            background: none;\n            border: none;\n            font-size: 1.5rem;\n            cursor: pointer;\n            color: var(--secondary);\n            width: 36px;\n            height: 36px;\n            border-radius: 8px;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            transition: all 0.3s;\n        }\n\n        .close-btn:hover {\n            background: var(--border);\n            color: var(--dark);\n        }\n\n        .modal-body {\n            padding: 2rem;\n        }\n\n        .form-group {\n            margin-bottom: 1.5rem;\n        }\n\n        .form-label {\n            display: block;\n            margin-bottom: 0.5rem;\n            font-weight: 600;\n            color: var(--dark);\n            font-size: 0.9rem;\n        }\n\n        .form-control {\n            width: 100%;\n            padding: 12px 16px;\n            border: 2px solid var(--border);\n            border-radius: 8px;\n            font-size: 0.95rem;\n            transition: all 0.3s;\n            background: var(--card-bg);\n        }\n\n        .form-control:focus {\n            outline: none;\n            border-color: var(--chemistry-blue);\n            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);\n        }\n\n        .form-row {\n            display: grid;\n            grid-template-columns: 1fr 1fr;\n            gap: 1rem;\n        }\n\n        .form-actions {\n            display: flex;\n            gap: 1rem;\n            margin-top: 2rem;\n        }\n\n        .form-actions .btn {\n            flex: 1;\n        }\n\n        /* File Upload */\n        .file-upload-area {\n            border: 2px dashed var(--border);\n            border-radius: 12px;\n            padding: 3rem 2rem;\n            text-align: center;\n            cursor: pointer;\n            transition: all 0.3s;\n            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);\n        }\n\n        .file-upload-area:hover, .file-upload-area.dragover {\n            border-color: var(--chemistry-blue);\n            background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%);\n        }\n\n        .file-upload-icon {\n            font-size: 3rem;\n            color: var(--chemistry-blue);\n            margin-bottom: 1rem;\n        }\n\n        /* Notifications */\n        .notification {\n            position: fixed;\n            top: 100px;\n            right: 30px;\n            padding: 1rem 1.5rem;\n            border-radius: 12px;\n            color: white;\n            z-index: 3000;\n            animation: slideInRight 0.3s ease-out;\n            display: flex;\n            align-items: center;\n            gap: 12px;\n            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);\n            max-width: 400px;\n        }\n\n        @keyframes slideInRight {\n            from { transform: translateX(100%); opacity: 0; }\n            to { transform: translateX(0); opacity: 1; }\n        }\n\n        .notification.success {\n            background: linear-gradient(135deg, var(--success) 0%, #059669 100%);\n        }\n\n        .notification.error {\n            background: linear-gradient(135deg, var(--danger) 0%, #dc2626 100%);\n        }\n\n        .notification.warning {\n            background: linear-gradient(135deg, var(--warning) 0%, #d97706 100%);\n        }\n\n        /* Loader */\n        .loader {\n            display: none;\n            position: fixed;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            background: rgba(255, 255, 255, 0.9);\n            z-index: 4000;\n            align-items: center;\n            justify-content: center;\n            flex-direction: column;\n            gap: 1rem;\n        }\n\n        .spinner {\n            width: 50px;\n            height: 50px;\n            border: 4px solid var(--border);\n            border-top: 4px solid var(--chemistry-blue);\n            border-radius: 50%;\n            animation: spin 1s linear infinite;\n        }\n\n        @keyframes spin {\n            0% { transform: rotate(0deg); }\n            100% { transform: rotate(360deg); }\n        }\n\n        /* Empty State */\n        .empty-state {\n            text-align: center;\n            padding: 4rem 2rem;\n            color: var(--secondary);\n        }\n\n        .empty-icon {\n            font-size: 4rem;\n            margin-bottom: 1rem;\n            opacity: 0.5;\n        }\n\n        /* Chemistry-specific */\n        .chemistry-badge {\n            background: linear-gradient(135deg, var(--chemistry-blue) 0%, var(--chemistry-purple) 100%);\n            color: white;\n            padding: 6px 12px;\n            border-radius: 20px;\n            font-size: 0.85rem;\n            font-weight: 600;\n            display: inline-flex;\n            align-items: center;\n            gap: 6px;\n        }\n\n        .subject-tag {\n            display: inline-block;\n            padding: 4px 12px;\n            border-radius: 20px;\n            font-size: 0.8rem;\n            font-weight: 600;\n            margin-right: 8px;\n            margin-bottom: 8px;\n        }\n\n        .objective-chemistry {\n            background: rgba(59, 130, 246, 0.1);\n            color: var(--chemistry-blue);\n            border: 2px solid rgba(59, 130, 246, 0.3);\n        }\n\n        .theoretical-chemistry {\n            background: rgba(16, 185, 129, 0.1);\n            color: var(--chemistry-green);\n            border: 2px solid rgba(16, 185, 129, 0.3);\n        }\n\n        /* Responsive */\n        @media (max-width: 1024px) {\n            .sidebar {\n                transform: translateX(-100%);\n                transition: transform 0.3s ease-out;\n                z-index: 1001;\n            }\n\n            .sidebar.active {\n                transform: translateX(0);\n            }\n\n            .content-area {\n                margin-left: 0;\n            }\n\n            .sidebar-toggle {\n                display: block;\n            }\n\n            .materials-grid {\n                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n            }\n\n            .student-performance-grid {\n                grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n            }\n        }\n\n        @media (max-width: 768px) {\n            .header {\n                padding: 0 1rem;\n            }\n\n            .nav-links {\n                display: none;\n            }\n\n            .content-area {\n                padding: 1rem;\n            }\n\n            .content-section {\n                padding: 1.5rem;\n            }\n\n            .stats-grid {\n                grid-template-columns: 1fr;\n            }\n\n            .materials-grid {\n                grid-template-columns: 1fr;\n            }\n\n            .student-performance-grid {\n                grid-template-columns: 1fr;\n            }\n\n            .form-row {\n                grid-template-columns: 1fr;\n            }\n\n            .timetable-container {\n                font-size: 0.9rem;\n            }\n\n            .subject-performance {\n                flex-direction: column;\n                gap: 0.5rem;\n            }\n\n            .subject-name {\n                min-width: auto;\n                width: 100%;\n            }\n\n            .student-header {\n                flex-direction: column;\n                text-align: center;\n            }\n\n            .comparison-table {\n                font-size: 0.8rem;\n            }\n        }\n\n        /* Animation Classes */\n        .fade-in {\n            animation: fadeIn 0.5s ease-out;\n        }\n\n        .slide-up {\n            animation: slideUp 0.4s ease-out;\n        }\n\n        @keyframes slideUp {\n            from { transform: translateY(20px); opacity: 0; }\n            to { transform: translateY(0); opacity: 1; }\n        }\n\n        /* Custom Icons */\n        .icon {\n            font-size: 1.2rem;\n        }\n\n        /* Toggle View */\n        .view-toggle {\n            display: flex;\n            gap: 0.5rem;\n            margin-bottom: 1.5rem;\n        }\n\n        .view-toggle-btn {\n            padding: 8px 16px;\n            border: 2px solid var(--border);\n            background: white;\n            border-radius: 8px;\n            cursor: pointer;\n            font-weight: 600;\n            transition: all 0.3s;\n        }\n\n        .view-toggle-btn.active {\n            background: var(--chemistry-blue);\n            color: white;\n            border-color: var(--chemistry-blue);\n        }\n        \n        /* Hidden class */\n        .hidden {\n            display: none !important;\n        }\n    "
      }}
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    {/* Loader */}
    <div className="loader" id="loader">
      <div className="spinner" />
      <div>Loading...</div>
    </div>
    {/* Header */}
    <header className="header">
      <div className="logo">
        <div className="logo-icon">⚗️</div>
        <span>Chemistry StudyHub</span>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <a
              href="#dashboard"
              className="nav-link active"
              onclick="showSection('dashboard')"
            >
              <i className="fas fa-home" /> Dashboard
            </a>
          </li>
          <li>
            <a
              href="#materials"
              className="nav-link"
              onclick="showSection('materials')"
            >
              <i className="fas fa-file-alt" /> Materials
            </a>
          </li>
          <li>
            <a
              href="#timetable"
              className="nav-link"
              onclick="showSection('timetable')"
            >
              <i className="fas fa-calendar-alt" /> Timetable
            </a>
          </li>
          <li>
            <a
              href="#analytics"
              className="nav-link"
              onclick="showSection('analytics')"
            >
              <i className="fas fa-chart-bar" /> Analytics
            </a>
          </li>
        </ul>
      </nav>
      <div className="header-actions">
        <div
          id="adminBadge"
          className="admin-badge"
          style={{ display: "none" }}
        >
          <i className="fas fa-crown" /> Admin Mode
        </div>
        <button
          id="loginBtn"
          className="btn btn-admin"
          onclick="showLoginModal()"
        >
          <i className="fas fa-lock" /> Admin Login
        </button>
        <button
          id="uploadBtn"
          className="btn btn-primary hidden"
          onclick="openUploadModal()"
        >
          <i className="fas fa-upload" /> Upload
        </button>
        <button
          id="addClassBtn"
          className="btn btn-primary hidden"
          onclick="openClassModal()"
        >
          <i className="fas fa-plus" /> Add Class
        </button>
        <button
          id="addMarksBtn"
          className="btn btn-primary hidden"
          onclick="openMarksModal()"
        >
          <i className="fas fa-plus-circle" /> Add Marks
        </button>
        <button
          id="logoutBtn"
          className="btn btn-danger hidden"
          onclick="logoutAdmin()"
        >
          <i className="fas fa-sign-out-alt" /> Logout
        </button>
      </div>
    </header>
    {/* Sidebar */}
    <aside className="sidebar" id="sidebar">
      <div className="sidebar-section">
        <h3 className="sidebar-title">Quick Actions</h3>
        <a
          href="#"
          className="sidebar-link active"
          onclick="showSection('dashboard')"
        >
          <i className="fas fa-tachometer-alt" /> Dashboard
        </a>
        <a href="#" className="sidebar-link" onclick="showSection('materials')">
          <i className="fas fa-book" /> All Materials
        </a>
        <a href="#" className="sidebar-link" onclick="showSection('timetable')">
          <i className="fas fa-table" /> Timetable
        </a>
        <a href="#" className="sidebar-link" onclick="showSection('analytics')">
          <i className="fas fa-chart-pie" /> Analytics
        </a>
      </div>
      <div className="sidebar-section">
        <h3 className="sidebar-title">Categories</h3>
        <a
          href="#"
          className="sidebar-link"
          onclick="filterByCategory('Lecture Notes')"
        >
          <i className="fas fa-sticky-note" /> Lecture Notes
        </a>
        <a
          href="#"
          className="sidebar-link"
          onclick="filterByCategory('Assignments')"
        >
          <i className="fas fa-tasks" /> Assignments
        </a>
        <a
          href="#"
          className="sidebar-link"
          onclick="filterByCategory('Past Papers')"
        >
          <i className="fas fa-file-pdf" /> Past Papers
        </a>
        <a
          href="#"
          className="sidebar-link"
          onclick="filterByCategory('Books')"
        >
          <i className="fas fa-book-open" /> Books
        </a>
        <a
          href="#"
          className="sidebar-link"
          onclick="filterByCategory('Projects')"
        >
          <i className="fas fa-code" /> Projects
        </a>
      </div>
      <div className="sidebar-section">
        <h3 className="sidebar-title">Chemistry Subjects</h3>
        <a
          href="#"
          className="sidebar-link"
          onclick="filterBySubject('Objective Chemistry')"
        >
          <i className="fas fa-flask" /> Objective Chemistry
        </a>
        <a
          href="#"
          className="sidebar-link"
          onclick="filterBySubject('Theoretical Chemistry')"
        >
          <i className="fas fa-atom" /> Theoretical Chemistry
        </a>
      </div>
      <div className="sidebar-section">
        <h3 className="sidebar-title">Week Navigation</h3>
        <div style={{ padding: "0 1rem" }}>
          <div
            className="week-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: "1rem"
            }}
          >
            <button
              className="btn btn-sm"
              onclick="changeWeek(-1)"
              style={{ flex: 1 }}
            >
              <i className="fas fa-chevron-left" /> Prev
            </button>
            <div
              id="weekDisplay"
              style={{ fontWeight: 600, textAlign: "center", flex: 2 }}
            >
              Week 1
            </div>
            <button
              className="btn btn-sm"
              onclick="changeWeek(1)"
              style={{ flex: 1 }}
            >
              Next <i className="fas fa-chevron-right" />
            </button>
          </div>
        </div>
      </div>
    </aside>
    {/* Main Content */}
    <main className="main-content">
      <div className="content-area">
        {/* Dashboard Section */}
        <section id="dashboardSection" className="content-section">
          <div className="section-header">
            <h1 className="section-title">
              <i className="fas fa-tachometer-alt" /> Chemistry Dashboard
            </h1>
            <div className="search-container">
              <i className="fas fa-search search-icon" />
              <input
                type="text"
                className="search-box"
                id="globalSearch"
                placeholder="Search chemistry materials, classes..."
                onkeyup="globalSearch(event)"
              />
            </div>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-file-alt" />
              </div>
              <div className="stat-content">
                <h3 id="totalMaterials">0</h3>
                <p>Chemistry Materials</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-download" />
              </div>
              <div className="stat-content">
                <h3 id="totalDownloads">0</h3>
                <p>Total Downloads</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-calendar" />
              </div>
              <div className="stat-content">
                <h3 id="totalClasses">0</h3>
                <p>Chemistry Classes</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-graduation-cap" />
              </div>
              <div className="stat-content">
                <h3 id="uniqueSubjects">2</h3>
                <p>Chemistry Subjects</p>
              </div>
            </div>
          </div>
          <div className="content-section">
            <h2 className="section-title">
              <i className="fas fa-fire" /> Trending Chemistry Materials
            </h2>
            <div id="trendingMaterials" className="materials-grid">
              {/* Trending materials will be loaded here */}
            </div>
          </div>
        </section>
        {/* Materials Section */}
        <section
          id="materialsSection"
          className="content-section"
          style={{ display: "none" }}
        >
          <div className="section-header">
            <h1 className="section-title">
              <i className="fas fa-book" /> Chemistry Study Materials
            </h1>
            <div>
              <button
                className="btn btn-primary"
                onclick="openUploadModal()"
                id="uploadMaterialsBtn"
                style={{ display: "none" }}
              >
                <i className="fas fa-upload" /> Upload New
              </button>
            </div>
          </div>
          <div className="filters">
            <div className="filter-group">
              <label className="filter-label">Category</label>
              <select
                className="filter-select"
                id="categoryFilter"
                onchange="filterMaterials()"
              >
                <option value="">All Categories</option>
                <option value="Lecture Notes">Lecture Notes</option>
                <option value="Assignments">Assignments</option>
                <option value="Past Papers">Past Papers</option>
                <option value="Books">Books</option>
                <option value="Projects">Projects</option>
                <option value="Tutorials">Tutorials</option>
              </select>
            </div>
            <div className="filter-group">
              <label className="filter-label">Sort By</label>
              <select
                className="filter-select"
                id="sortFilter"
                onchange="sortMaterials()"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="downloads">Most Downloads</option>
                <option value="title">Title A-Z</option>
              </select>
            </div>
            <div className="filter-group">
              <label className="filter-label">Subject</label>
              <select
                className="filter-select"
                id="subjectFilter"
                onchange="filterMaterials()"
              >
                <option value="">All Subjects</option>
                <option value="Objective Chemistry">Objective Chemistry</option>
                <option value="Theoretical Chemistry">
                  Theoretical Chemistry
                </option>
              </select>
            </div>
          </div>
          <div id="materialsContainer" className="materials-grid">
            {/* Materials will be loaded here */}
          </div>
        </section>
        {/* Timetable Section */}
        <section
          id="timetableSection"
          className="content-section"
          style={{ display: "none" }}
        >
          <div className="section-header">
            <h1 className="section-title">
              <i className="fas fa-calendar-alt" /> Chemistry Classes Timetable
            </h1>
            <div className="week-nav">
              <button className="btn" onclick="changeWeek(-1)">
                <i className="fas fa-chevron-left" /> Previous Week
              </button>
              <div
                id="weekDisplayMain"
                style={{ fontWeight: 600, padding: "0 1rem" }}
              >
                Week 1 (Mar 10 - Mar 14)
              </div>
              <button className="btn" onclick="changeWeek(1)">
                Next Week <i className="fas fa-chevron-right" />
              </button>
            </div>
          </div>
          <div className="timetable-container">
            <table className="timetable-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                  <th>Saturday</th>
                </tr>
              </thead>
              <tbody id="timetableBody">
                {/* Timetable rows will be generated here */}
              </tbody>
            </table>
          </div>
          <div
            id="adminTimetableInfo"
            className="content-section"
            style={{ marginTop: "2rem", display: "none" }}
          >
            <h3>
              <i className="fas fa-info-circle" /> Admin Controls
            </h3>
            <p>
              Click on empty time slots to add classes. Click on existing
              classes to edit or delete them.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <button className="btn btn-primary" onclick="openClassModal()">
                <i className="fas fa-plus" /> Add New Class
              </button>
              <button className="btn" onclick="exportTimetable()">
                <i className="fas fa-download" /> Export Timetable
              </button>
            </div>
          </div>
        </section>
        {/* Analytics Section */}
        <section
          id="analyticsSection"
          className="content-section"
          style={{ display: "none" }}
        >
          <div className="section-header">
            <h1 className="section-title">
              <i className="fas fa-chart-bar" /> Chemistry Performance Analytics
            </h1>
            <button
              className="btn btn-primary"
              onclick="openMarksModal()"
              id="addMarksBtnAnalytics"
              style={{ display: "none" }}
            >
              <i className="fas fa-plus-circle" /> Add Marks
            </button>
          </div>
          <div className="stats-grid" style={{ marginBottom: "2rem" }}>
            <div className="stat-card">
              <div
                className="stat-icon"
                style={{
                  background:
                    "linear-gradient(135deg, #f0abfc 0%, #d946ef 100%)"
                }}
              >
                <i className="fas fa-chart-line" />
              </div>
              <div className="stat-content">
                <h3 id="avgDownloads">0</h3>
                <p>Avg. Downloads/Day</p>
              </div>
            </div>
            <div className="stat-card">
              <div
                className="stat-icon"
                style={{
                  background:
                    "linear-gradient(135deg, #a5b4fc 0%, #818cf8 100%)"
                }}
              >
                <i className="fas fa-users" />
              </div>
              <div className="stat-content">
                <h3 id="activeUsers">0</h3>
                <p>Active Students</p>
              </div>
            </div>
            <div className="stat-card">
              <div
                className="stat-icon"
                style={{
                  background:
                    "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)"
                }}
              >
                <i className="fas fa-star" />
              </div>
              <div className="stat-content">
                <h3 id="popularCategory">-</h3>
                <p>Most Popular Category</p>
              </div>
            </div>
            <div className="stat-card">
              <div
                className="stat-icon"
                style={{
                  background:
                    "linear-gradient(135deg, #34d399 0%, #10b981 100%)"
                }}
              >
                <i className="fas fa-bolt" />
              </div>
              <div className="stat-content">
                <h3 id="peakHour">-</h3>
                <p>Peak Activity Hour</p>
              </div>
            </div>
          </div>
          {/* MARKS SECTION */}
          <div className="content-section">
            <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
              <i className="fas fa-chart-bar" /> Chemistry Performance
            </h2>
            {/* Overall Performance */}
            <div className="marks-category">
              <div className="marks-category-header">
                <div className="marks-category-title">
                  <div
                    className="marks-category-icon"
                    style={{
                      background:
                        "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
                    }}
                  >
                    <i className="fas fa-chart-pie" />
                  </div>
                  Overall Chemistry Performance
                </div>
                <div
                  id="overallGrade"
                  style={{ fontSize: "1.2rem", fontWeight: 700 }}
                >
                  -
                </div>
              </div>
              <div className="marks-stats">
                <div className="marks-stat">
                  <div className="marks-stat-value" id="avgExamScore">
                    0%
                  </div>
                  <div className="marks-stat-label">Exam Average</div>
                </div>
                <div className="marks-stat">
                  <div className="marks-stat-value" id="avgAssignmentScore">
                    0%
                  </div>
                  <div className="marks-stat-label">Assignment Average</div>
                </div>
                <div className="marks-stat">
                  <div className="marks-stat-value" id="avgQuizScore">
                    0%
                  </div>
                  <div className="marks-stat-label">Quiz Average</div>
                </div>
                <div className="marks-stat">
                  <div className="marks-stat-value" id="overallAverage">
                    0%
                  </div>
                  <div className="marks-stat-label">Overall Average</div>
                </div>
              </div>
            </div>
            {/* Subject Performance */}
            <div className="marks-category">
              <div className="marks-category-header">
                <h3 className="marks-category-title">
                  <div
                    className="marks-category-icon"
                    style={{
                      background:
                        "linear-gradient(135deg, #10b981 0%, #059669 100%)"
                    }}
                  >
                    <i className="fas fa-book" />
                  </div>
                  Subject Performance
                </h3>
              </div>
              <div id="subjectPerformanceChart">
                {/* Subject performance bars will be generated here */}
              </div>
            </div>
            {/* Exam Marks */}
            <div className="marks-category">
              <div className="marks-category-header">
                <h3 className="marks-category-title">
                  <div
                    className="marks-category-icon"
                    style={{
                      background:
                        "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
                    }}
                  >
                    <i className="fas fa-file-alt" />
                  </div>
                  Chemistry Exam Marks
                </h3>
                <div
                  style={{ fontWeight: 600, color: "var(--chemistry-blue)" }}
                >
                  Average: <span id="examAverage">0%</span>
                </div>
              </div>
              <div className="marks-stats" style={{ marginBottom: "1rem" }}>
                <div className="marks-stat">
                  <div className="marks-stat-value" id="totalExams">
                    0
                  </div>
                  <div className="marks-stat-label">Total Exams</div>
                </div>
                <div className="marks-stat">
                  <div className="marks-stat-value" id="highestExam">
                    0%
                  </div>
                  <div className="marks-stat-label">Highest Score</div>
                </div>
                <div className="marks-stat">
                  <div className="marks-stat-value" id="lowestExam">
                    0%
                  </div>
                  <div className="marks-stat-label">Lowest Score</div>
                </div>
                <div className="marks-stat">
                  <div className="marks-stat-value" id="examPassRate">
                    0%
                  </div>
                  <div className="marks-stat-label">Pass Rate</div>
                </div>
              </div>
              <table className="marks-table">
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Exam Name</th>
                    <th>Score</th>
                    <th>Max Score</th>
                    <th>Percentage</th>
                    <th>Grade</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody id="examMarksTable">
                  {/* Exam marks will be loaded here */}
                </tbody>
              </table>
            </div>
            {/* Assignment Marks */}
            <div className="marks-category">
              <div className="marks-category-header">
                <h3 className="marks-category-title">
                  <div
                    className="marks-category-icon"
                    style={{
                      background:
                        "linear-gradient(135deg, #10b981 0%, #059669 100%)"
                    }}
                  >
                    <i className="fas fa-tasks" />
                  </div>
                  Chemistry Assignment Marks
                </h3>
                <div style={{ fontWeight: 600, color: "var(--success)" }}>
                  Average: <span id="assignmentAverage">0%</span>
                </div>
              </div>
              <div className="marks-stats" style={{ marginBottom: "1rem" }}>
                <div className="marks-stat">
                  <div className="marks-stat-value" id="totalAssignments">
                    0
                  </div>
                  <div className="marks-stat-label">Total Assignments</div>
                </div>
                <div className="marks-stat">
                  <div className="marks-stat-value" id="highestAssignment">
                    0%
                  </div>
                  <div className="marks-stat-label">Highest Score</div>
                </div>
                <div className="marks-stat">
                  <div className="marks-stat-value" id="lowestAssignment">
                    0%
                  </div>
                  <div className="marks-stat-label">Lowest Score</div>
                </div>
                <div className="marks-stat">
                  <div className="marks-stat-value" id="assignmentCompletion">
                    0%
                  </div>
                  <div className="marks-stat-label">Completion Rate</div>
                </div>
              </div>
              <table className="marks-table">
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Assignment</th>
                    <th>Score</th>
                    <th>Max Score</th>
                    <th>Percentage</th>
                    <th>Grade</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody id="assignmentMarksTable">
                  {/* Assignment marks will be loaded here */}
                </tbody>
              </table>
            </div>
            {/* Quiz Marks */}
            <div className="marks-category">
              <div className="marks-category-header">
                <h3 className="marks-category-title">
                  <div
                    className="marks-category-icon"
                    style={{
                      background:
                        "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)"
                    }}
                  >
                    <i className="fas fa-question-circle" />
                  </div>
                  Chemistry Quiz Marks
                </h3>
                <div
                  style={{ fontWeight: 600, color: "var(--chemistry-purple)" }}
                >
                  Average: <span id="quizAverage">0%</span>
                </div>
              </div>
              <div className="marks-stats" style={{ marginBottom: "1rem" }}>
                <div className="marks-stat">
                  <div className="marks-stat-value" id="totalQuizzes">
                    0
                  </div>
                  <div className="marks-stat-label">Total Quizzes</div>
                </div>
                <div className="marks-stat">
                  <div className="marks-stat-value" id="highestQuiz">
                    0%
                  </div>
                  <div className="marks-stat-label">Highest Score</div>
                </div>
                <div className="marks-stat">
                  <div className="marks-stat-value" id="lowestQuiz">
                    0%
                  </div>
                  <div className="marks-stat-label">Lowest Score</div>
                </div>
                <div className="marks-stat">
                  <div className="marks-stat-value" id="quizAttempts">
                    0
                  </div>
                  <div className="marks-stat-label">Total Attempts</div>
                </div>
              </div>
              <table className="marks-table">
                <thead>
                  <tr>
                    <th>Student</th>
                    <th>Quiz Name</th>
                    <th>Score</th>
                    <th>Max Score</th>
                    <th>Percentage</th>
                    <th>Grade</th>
                    <th>Date</th>
                    <th>Time Taken</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody id="quizMarksTable">
                  {/* Quiz marks will be loaded here */}
                </tbody>
              </table>
            </div>
          </div>
          {/* STUDENT PERFORMANCE COMPARISON SECTION */}
          <div className="content-section">
            <div className="section-header">
              <h2 className="section-title">
                <i className="fas fa-users" /> Student Performance Comparison
              </h2>
              <div className="btn-group">
                <button
                  className="btn btn-sm btn-primary"
                  onclick="toggleStudentView('cards')"
                >
                  <i className="fas fa-th-large" /> Cards View
                </button>
                <button
                  className="btn btn-sm btn-outline"
                  onclick="toggleStudentView('table')"
                >
                  <i className="fas fa-table" /> Table View
                </button>
                <button
                  className="btn btn-sm btn-outline"
                  onclick="exportStudentPerformance()"
                >
                  <i className="fas fa-download" /> Export
                </button>
              </div>
            </div>
            {/* Filters for student comparison */}
            <div className="filters" id="studentFilters">
              <div className="filter-group">
                <label className="filter-label">Assessment Type</label>
                <select
                  className="filter-select"
                  id="studentAssessmentType"
                  onchange="updateStudentComparison()"
                >
                  <option value="all">All Assessments</option>
                  <option value="exam">Exams Only</option>
                  <option value="assignment">Assignments Only</option>
                  <option value="quiz">Quizzes Only</option>
                </select>
              </div>
              <div className="filter-group">
                <label className="filter-label">Subject</label>
                <select
                  className="filter-select"
                  id="studentSubjectFilter"
                  onchange="updateStudentComparison()"
                >
                  <option value="all">All Subjects</option>
                  <option value="Objective Chemistry">
                    Objective Chemistry
                  </option>
                  <option value="Theoretical Chemistry">
                    Theoretical Chemistry
                  </option>
                </select>
              </div>
              <div className="filter-group">
                <label className="filter-label">Sort By</label>
                <select
                  className="filter-select"
                  id="studentSortBy"
                  onchange="updateStudentComparison()"
                >
                  <option value="name">Name A-Z</option>
                  <option value="average">Average (High to Low)</option>
                  <option value="improvement">Improvement</option>
                </select>
              </div>
            </div>
            {/* Student Performance Summary */}
            <div
              className="marks-category"
              id="studentSummary"
              style={{ marginBottom: "1.5rem" }}
            >
              <div className="marks-category-header">
                <h3 className="marks-category-title">
                  <div
                    className="marks-category-icon"
                    style={{
                      background:
                        "linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)"
                    }}
                  >
                    <i className="fas fa-chart-bar" />
                  </div>
                  Class Performance Summary
                </h3>
                <div
                  style={{ fontWeight: 600, color: "var(--chemistry-purple)" }}
                >
                  Class Average: <span id="classAverage">0%</span>
                </div>
              </div>
              <div className="marks-stats">
                <div className="marks-stat">
                  <div className="marks-stat-value" id="totalStudents">
                    0
                  </div>
                  <div className="marks-stat-label">Total Students</div>
                </div>
                <div className="marks-stat">
                  <div className="marks-stat-value" id="topPerformer">
                    -
                  </div>
                  <div className="marks-stat-label">Top Performer</div>
                </div>
                <div className="marks-stat">
                  <div className="marks-stat-value" id="classPassRate">
                    0%
                  </div>
                  <div className="marks-stat-label">Class Pass Rate</div>
                </div>
                <div className="marks-stat">
                  <div className="marks-stat-value" id="mostImproved">
                    -
                  </div>
                  <div className="marks-stat-label">Most Improved</div>
                </div>
              </div>
            </div>
            {/* Student Cards View */}
            <div id="studentCardsView" className="student-performance-grid">
              {/* Student cards will be loaded here */}
            </div>
            {/* Student Table View */}
            <div
              id="studentTableView"
              className="timetable-container"
              style={{ display: "none", marginTop: "1.5rem" }}
            >
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Student</th>
                    <th>Overall Avg</th>
                    <th>Objective Chemistry</th>
                    <th>Theoretical Chemistry</th>
                    <th>Exams</th>
                    <th>Assignments</th>
                    <th>Quizzes</th>
                    <th>Trend</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody id="studentComparisonTable">
                  {/* Student comparison rows will be loaded here */}
                </tbody>
              </table>
            </div>
            {/* Individual Student Performance Modal */}
            <div id="studentDetailModal" className="modal">
              <div className="modal-content" style={{ maxWidth: 800 }}>
                <div className="modal-header">
                  <h2 className="modal-title">
                    <i className="fas fa-user-graduate" /> Student Performance
                    Details
                  </h2>
                  <button
                    className="close-btn"
                    onclick="hideStudentDetailModal()"
                  >
                    ×
                  </button>
                </div>
                <div className="modal-body">
                  <div id="studentDetailContent">
                    {/* Student details will be loaded here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Performance Trends Chart */}
          <div className="content-section">
            <div className="section-header">
              <h3 className="section-title">
                <i className="fas fa-chart-line" /> Chemistry Performance Trends
                Over Time
              </h3>
              <div className="btn-group">
                <button
                  className="btn btn-sm btn-primary"
                  onclick="updateTrendChart('monthly')"
                >
                  <i className="fas fa-calendar-alt" /> Monthly
                </button>
                <button
                  className="btn btn-sm btn-outline"
                  onclick="updateTrendChart('weekly')"
                >
                  <i className="fas fa-calendar-week" /> Weekly
                </button>
                <button
                  className="btn btn-sm btn-outline"
                  onclick="updateTrendChart('subject')"
                >
                  <i className="fas fa-book" /> By Subject
                </button>
                <button
                  className="btn btn-sm btn-outline"
                  onclick="exportTrendChart()"
                >
                  <i className="fas fa-download" /> Export
                </button>
              </div>
            </div>
            <div style={{ padding: "1rem", position: "relative" }}>
              <div style={{ height: 400 }}>
                <canvas id="performanceTrendChart" />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "2rem",
                  marginTop: "2rem",
                  flexWrap: "wrap"
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 4
                    }}
                  >
                    <div
                      style={{
                        width: 12,
                        height: 12,
                        background:
                          "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                        borderRadius: 2
                      }}
                    />
                    <span style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                      Objective Chemistry
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "var(--chemistry-blue)"
                    }}
                    id="trendObjAvg"
                  >
                    0%
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 4
                    }}
                  >
                    <div
                      style={{
                        width: 12,
                        height: 12,
                        background:
                          "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                        borderRadius: 2
                      }}
                    />
                    <span style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                      Theoretical Chemistry
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "var(--success)"
                    }}
                    id="trendTheoryAvg"
                  >
                    0%
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 4
                    }}
                  >
                    <div
                      style={{
                        width: 12,
                        height: 12,
                        background:
                          "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
                        borderRadius: 2
                      }}
                    />
                    <span style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                      Overall Average
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "var(--chemistry-purple)"
                    }}
                    id="trendOverallAvg"
                  >
                    0%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    {/* Modals */}
    <div id="loginModal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">
            <i className="fas fa-lock" /> Admin Authentication
          </h2>
          <button className="close-btn" onclick="hideLoginModal()">
            ×
          </button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="adminEmail"
              placeholder="admin@chemistry.com"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="adminPassword"
              placeholder="Enter password"
            />
          </div>
          <div className="form-actions">
            <button className="btn" onclick="hideLoginModal()">
              Cancel
            </button>
            <button className="btn btn-primary" onclick="loginAdmin()">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
    <div id="uploadModal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">
            <i className="fas fa-upload" /> Upload Chemistry Material
          </h2>
          <button className="close-btn" onclick="hideUploadModal()">
            ×
          </button>
        </div>
        <div className="modal-body">
          <form id="uploadForm" onsubmit="uploadMaterial(event)">
            <div className="form-group">
              <label className="form-label">Title *</label>
              <input
                type="text"
                className="form-control"
                id="materialTitle"
                placeholder="e.g., Organic Chemistry Notes"
                required=""
              />
            </div>
            <div className="form-group">
              <label className="form-label">Description *</label>
              <textarea
                className="form-control"
                id="materialDescription"
                rows={3}
                placeholder="Describe the content..."
                required=""
                defaultValue={""}
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Category *</label>
                <select
                  className="form-control"
                  id="materialCategory"
                  required=""
                >
                  <option value="">Select Category</option>
                  <option value="Lecture Notes">Lecture Notes</option>
                  <option value="Assignments">Assignments</option>
                  <option value="Past Papers">Past Papers</option>
                  <option value="Books">Books</option>
                  <option value="Projects">Projects</option>
                  <option value="Tutorials">Tutorials</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Subject *</label>
                <select
                  className="form-control"
                  id="materialSubject"
                  required=""
                >
                  <option value="">Select Subject</option>
                  <option value="Objective Chemistry">
                    Objective Chemistry
                  </option>
                  <option value="Theoretical Chemistry">
                    Theoretical Chemistry
                  </option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Upload File *</label>
              <div
                className="file-upload-area"
                id="fileUploadArea"
                onclick="document.getElementById('fileInput').click()"
              >
                <div className="file-upload-icon">
                  <i className="fas fa-cloud-upload-alt" />
                </div>
                <h4>Click to upload or drag and drop</h4>
                <p>PDF, DOC, PPT, ZIP files (Max 10MB)</p>
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onchange="handleFileSelect(event)"
                />
              </div>
              <div
                id="fileInfo"
                className="form-control"
                style={{ marginTop: "1rem", display: "none" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <span id="fileName" />
                  <button
                    type="button"
                    className="btn btn-sm"
                    onclick="clearFile()"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <div className="form-actions">
              <button type="button" className="btn" onclick="hideUploadModal()">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Upload to Cloud
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div id="classModal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">
            <i className="fas fa-calendar-plus" /> Manage Chemistry Class
          </h2>
          <button className="close-btn" onclick="hideClassModal()">
            ×
          </button>
        </div>
        <div className="modal-body">
          <form id="classForm" onsubmit="saveClass(event)">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Subject *</label>
                <select className="form-control" id="classSubject" required="">
                  <option value="">Select Subject</option>
                  <option value="Objective Chemistry">
                    Objective Chemistry
                  </option>
                  <option value="Theoretical Chemistry">
                    Theoretical Chemistry
                  </option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Course Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="classCode"
                  placeholder="e.g., CHEM101"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Day *</label>
                <select className="form-control" id="classDay" required="">
                  <option value="">Select Day</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Time Slot *</label>
                <select className="form-control" id="classTimeSlot" required="">
                  <option value="">Select Time</option>
                  <option value="07:30-08:50">07:30 AM - 08:50 AM</option>
                  <option value="09:30-10:30">09:30 AM - 10:30 AM</option>
                  <option value="10:40-11:45">10:40 AM - 11:45 AM</option>
                  <option value="11:45-12:55">11:45 AM - 12:45 PM</option>
                  <option value="01:30-02:30">01:30 PM - 02:30 PM</option>
                  <option value="02:40-03:50">02:40 PM - 03:50 PM</option>
                  <option value="04:20-05:30">04:20 PM - 05:30 PM</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Instructor *</label>
                <input
                  type="text"
                  className="form-control"
                  id="classInstructor"
                  placeholder="e.g., Dr. Smith"
                  required=""
                />
              </div>
              <div className="form-group">
                <label className="form-label">Room *</label>
                <input
                  type="text"
                  className="form-control"
                  id="classRoom"
                  placeholder="e.g., Lab 101"
                  required=""
                />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Class Type</label>
              <select className="form-control" id="classType">
                <option value="Lecture">Lecture</option>
                <option value="Lab">Lab</option>
                <option value="Tutorial">Tutorial</option>
                <option value="Seminar">Seminar</option>
                <option value="Workshop">Workshop</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Additional Notes</label>
              <textarea
                className="form-control"
                id="classNotes"
                rows={2}
                placeholder="Optional notes..."
                defaultValue={""}
              />
            </div>
            <input type="hidden" id="classId" />
            <div className="form-actions">
              <button type="button" className="btn" onclick="hideClassModal()">
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                id="classSubmitBtn"
              >
                Save to Cloud
              </button>
              <button
                type="button"
                className="btn btn-danger"
                id="deleteClassBtn"
                onclick="deleteClass()"
                style={{ display: "none" }}
              >
                <i className="fas fa-trash" /> Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/* Marks Modal */}
    <div id="marksModal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">
            <i className="fas fa-plus-circle" /> Add/Edit Chemistry Marks
          </h2>
          <button className="close-btn" onclick="hideMarksModal()">
            ×
          </button>
        </div>
        <div className="modal-body">
          <form id="marksForm" onsubmit="saveMarks(event)">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Category *</label>
                <select
                  className="form-control"
                  id="marksCategory"
                  required=""
                  onchange="toggleMarksFields()"
                >
                  <option value="">Select Category</option>
                  <option value="exam">Exam</option>
                  <option value="assignment">Assignment</option>
                  <option value="quiz">Quiz</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Subject *</label>
                <select className="form-control" id="marksSubject" required="">
                  <option value="">Select Subject</option>
                  <option value="Objective Chemistry">
                    Objective Chemistry
                  </option>
                  <option value="Theoretical Chemistry">
                    Theoretical Chemistry
                  </option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" id="assessmentLabel">
                  Assessment Name *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="marksName"
                  placeholder="e.g., Midterm Exam"
                  required=""
                />
              </div>
              <div className="form-group">
                <label className="form-label">Student Name *</label>
                <input
                  type="text"
                  className="form-control"
                  id="marksStudent"
                  placeholder="e.g., John Doe"
                  required=""
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Date *</label>
                <input
                  type="date"
                  className="form-control"
                  id="marksDate"
                  required=""
                />
              </div>
              <div className="form-group">
                <label className="form-label">Score Obtained *</label>
                <input
                  type="number"
                  className="form-control"
                  id="marksScore"
                  min={0}
                  max={100}
                  step="0.01"
                  required=""
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Maximum Score *</label>
                <input
                  type="number"
                  className="form-control"
                  id="marksMaxScore"
                  min={1}
                  step="0.01"
                  required=""
                />
              </div>
              <div className="form-group">
                <label className="form-label">Weight (0-1)</label>
                <input
                  type="number"
                  className="form-control"
                  id="marksWeight"
                  min={0}
                  max={1}
                  step="0.05"
                  defaultValue="0.1"
                />
              </div>
            </div>
            <div id="extraFields">
              {/* Extra fields for different categories */}
            </div>
            <div className="form-group">
              <label className="form-label">Notes (Optional)</label>
              <textarea
                className="form-control"
                id="marksNotes"
                rows={2}
                placeholder="Additional notes..."
                defaultValue={""}
              />
            </div>
            <input type="hidden" id="marksId" />
            <div className="form-actions">
              <button type="button" className="btn" onclick="hideMarksModal()">
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                id="marksSubmitBtn"
              >
                Save to Cloud
              </button>
              <button
                type="button"
                className="btn btn-danger"
                id="deleteMarksBtn"
                onclick="deleteMarks()"
                style={{ display: "none" }}
              >
                <i className="fas fa-trash" /> Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/* Notification Container */}
    <div id="notificationContainer" />
  </>
)
