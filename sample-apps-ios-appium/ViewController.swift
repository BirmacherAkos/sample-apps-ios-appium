
//
//  ViewController.swift
//  sample-apps-ios-appium
//
//  Created by Akos Birmacher on 2018. 12. 13..
//  Copyright © 2018. Bitrise. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var topTextField: UITextField!
    @IBOutlet weak var bottomTextField: UITextField!
    @IBOutlet weak var sumLabel: UILabel!
    
    @IBOutlet weak var addButton: UIButton!
    @IBOutlet weak var clearButton: UIButton!
    
    override func viewDidLoad() {
        super.viewDidLoad()
    
    }

    @IBAction func onAddButtonClicked(_ sender: Any) {
        self.sumLabel.text = String(add())
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 2) { [unowned self] in
            self.clearButton.isHidden = false
        }
        
    }
    
    @IBAction func onClearButtonClicked(_ sender: Any) {
        clear()
        self.clearButton.isHidden = true
    }
    
    private func add() -> Int {
        return (Int(self.topTextField.text ?? "0") ?? 0) + (Int(self.bottomTextField.text ?? "0") ?? 0)
    }
    
    private func clear() {
        self.topTextField.text = ""
        self.bottomTextField.text = ""
    }
    
}

